/**
 * generate-image - AI-powered image generation using Google's Gemini model (Nano Banana Pro)
 *
 * Uses the @google/genai SDK with GEMINI_API_KEY from environment.
 */

import { GoogleGenAI } from '@google/genai';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import chalk from 'chalk';

// The model to use for image generation
const MODEL = 'gemini-3-pro-image-preview';

// Resolution options
const RESOLUTIONS = ['1K', '2K', '4K'] as const;
type Resolution = (typeof RESOLUTIONS)[number];

// Valid aspect ratios
const ASPECT_RATIOS = ['1:1', '16:9', '9:16', '3:4', '4:3', '3:2', '2:3'] as const;
type AspectRatio = (typeof ASPECT_RATIOS)[number];

export interface GenerateImageOptions {
  output?: string;
  resolution?: string;
  aspect?: string;
  ref?: string;
}

/**
 * Get the Google GenAI client using API key from environment
 */
function getClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error(
      chalk.red('Error:') +
        ' GEMINI_API_KEY or GOOGLE_API_KEY environment variable not set.\n' +
        'Get an API key at https://aistudio.google.com/apikey'
    );
    process.exit(1);
  }
  return new GoogleGenAI({ apiKey });
}

/**
 * Read prompt from string or .txt file path
 */
function readPrompt(promptOrPath: string): string {
  if (promptOrPath.endsWith('.txt')) {
    const resolved = resolve(promptOrPath);
    if (existsSync(resolved)) {
      return readFileSync(resolved, 'utf-8').trim();
    }
  }
  return promptOrPath;
}

/**
 * Main generate-image function
 */
export async function generateImage(
  prompt: string,
  options: GenerateImageOptions
): Promise<void> {
  const output = options.output || 'output.png';
  const resolution = (options.resolution || '1K') as Resolution;
  const aspect = (options.aspect || '1:1') as AspectRatio;
  const ref = options.ref;

  // Validate resolution
  if (!RESOLUTIONS.includes(resolution)) {
    console.error(
      chalk.red('Error:') +
        ` Invalid resolution '${resolution}'. Use: ${RESOLUTIONS.join(', ')}`
    );
    process.exit(1);
  }

  // Validate aspect ratio
  if (!ASPECT_RATIOS.includes(aspect)) {
    console.error(
      chalk.red('Error:') +
        ` Invalid aspect ratio '${aspect}'. Use: ${ASPECT_RATIOS.join(', ')}`
    );
    process.exit(1);
  }

  // Validate reference image if provided
  let referenceImagePath: string | undefined;
  if (ref) {
    referenceImagePath = resolve(ref);
    if (!existsSync(referenceImagePath)) {
      console.error(chalk.red('Error:') + ` Reference image not found: ${ref}`);
      process.exit(1);
    }
  }

  // Read prompt
  const promptText = readPrompt(prompt);
  console.log(chalk.blue('Generating image with') + ` ${MODEL}...`);

  // Create client
  const client = getClient();

  // Build contents - either just prompt or prompt with reference image
  let contents: string | Array<{ inlineData: { mimeType: string; data: string } } | string>;

  if (referenceImagePath) {
    const imageData = readFileSync(referenceImagePath);
    const base64Data = imageData.toString('base64');
    // Determine mime type from extension
    const ext = referenceImagePath.toLowerCase().split('.').pop();
    const mimeType =
      ext === 'png'
        ? 'image/png'
        : ext === 'gif'
          ? 'image/gif'
          : ext === 'webp'
            ? 'image/webp'
            : 'image/jpeg';

    contents = [
      {
        inlineData: {
          mimeType,
          data: base64Data,
        },
      },
      promptText,
    ];
  } else {
    contents = promptText;
  }

  // Build image config
  const imageConfig: { aspectRatio: string; imageSize?: string } = {
    aspectRatio: aspect,
  };
  if (resolution !== '1K') {
    imageConfig.imageSize = resolution;
  }

  const response = await client.models.generateContent({
    model: MODEL,
    contents,
    config: {
      responseModalities: ['IMAGE'],
      imageConfig,
    },
  });

  // Find and save the image from response
  const candidates = response.candidates;
  if (!candidates || candidates.length === 0) {
    console.error(chalk.red('Error:') + ' No response candidates');
    process.exit(1);
  }

  const parts = candidates[0]?.content?.parts;
  if (!parts) {
    console.error(chalk.red('Error:') + ' No parts in response');
    process.exit(1);
  }

  for (const part of parts) {
    if (part.text) {
      console.log(chalk.blue('Model response:') + ` ${part.text}`);
    } else if (part.inlineData?.data) {
      const buffer = Buffer.from(part.inlineData.data, 'base64');
      writeFileSync(output, buffer);
      console.log(chalk.green('Image saved to') + ` ${output}`);
      return;
    }
  }

  console.error(chalk.red('Error:') + ' No image in response');
  process.exit(1);
}
