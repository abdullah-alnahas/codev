# Plan 0061: STL Viewer Support

## Overview

Implement STL 3D file viewing in the dashboard annotation viewer using Three.js.

## Implementation Phases

### Phase 1: Create STL Viewer Template

**File**: `packages/codev/templates/stl-viewer.html`

Create standalone HTML template with:
1. Three.js loaded from CDN (unpkg or cdnjs)
2. STLLoader and OrbitControls
3. Scene setup with:
   - Perspective camera
   - Ambient + directional lighting
   - Grid helper for floor
   - Axes helper (optional)
4. STL loading from URL parameter
5. Auto-center and fit to view
6. Dark theme styling to match dashboard

**CDN URLs**:
```html
<script src="https://unpkg.com/three@0.160.0/build/three.min.js"></script>
<script src="https://unpkg.com/three@0.160.0/examples/js/loaders/STLLoader.js"></script>
<script src="https://unpkg.com/three@0.160.0/examples/js/controls/OrbitControls.js"></script>
```

### Phase 2: Update Open Server

**File**: `packages/codev/src/agent-farm/servers/open-server.ts`

1. Add STL to supported extensions detection
2. For `.stl` files, serve `stl-viewer.html` template
3. Pass file path as query parameter: `?file=/path/to/model.stl`
4. Add route to serve raw STL file content

### Phase 3: Viewer Features

Add to `stl-viewer.html`:
1. **Reset View button** - Reset camera to initial position
2. **Wireframe toggle** - Toggle between solid and wireframe
3. **Info display** - Show filename and triangle count
4. **Loading indicator** - Show while STL loads
5. **Error handling** - Display message if file fails to load

### Phase 4: Polish

1. Match dashboard color scheme (dark background)
2. Responsive canvas sizing
3. Touch support for mobile (OrbitControls handles this)
4. Handle large files gracefully

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `packages/codev/templates/stl-viewer.html` | Create | STL viewer template |
| `packages/codev/src/agent-farm/servers/open-server.ts` | Modify | Add STL detection and serving |

## Testing

1. Test with binary STL file (most common)
2. Test with ASCII STL file
3. Test with large file (>10MB)
4. Test mouse controls: rotate, zoom, pan
5. Test reset view button
6. Test in Chrome, Firefox, Safari

## Rollback

If issues arise:
- STL files fall back to text view (current behavior)
- No changes to existing annotation viewer

## Estimated Scope

- ~200 lines HTML/JS for viewer template
- ~20 lines TypeScript for open-server changes
- Total: ~220 lines

---

## Amendment History

### TICK-001: Quaternion-based Trackball Rotation (2025-12-27)

**Changes**:
- Replace OrbitControls with TrackballControls in stl-viewer.html
- TrackballControls uses quaternion math internally, eliminating gimbal lock
- Update CDN imports to include TrackballControls.js instead of OrbitControls.js

**Implementation Steps**:
1. Update CDN script tag from OrbitControls.js to TrackballControls.js
2. Change `new THREE.OrbitControls(...)` to `new THREE.TrackballControls(...)`
3. Configure TrackballControls settings:
   - `controls.rotateSpeed = 2.0`
   - `controls.zoomSpeed = 1.2`
   - `controls.panSpeed = 0.8`
   - `controls.staticMoving = true` (no inertia)
   - `controls.dynamicDampingFactor = 0.3`
4. Update reset view function to use `controls.reset()` method
5. Test rotation at all orientations including poles

**CDN URL**:
```html
<script src="https://unpkg.com/three@0.128.0/examples/js/controls/TrackballControls.js"></script>
```

Note: Using Three.js r128 for global builds compatibility (r129+ dropped non-module builds).

**Review**: See `reviews/0061-stl-viewer-tick-001.md`

### TICK-002: 3MF Format Support with Multi-Color (2025-12-27)

**Overview**: Extend the 3D viewer to support 3MF files with native multi-color rendering.

**Implementation Steps**:

#### Step 1: Generalize Viewer to 3D Viewer

Rename and refactor `stl-viewer.html` → `3d-viewer.html` to handle multiple formats:
- Accept format type via template variable `{{FORMAT}}`
- Load appropriate loader based on format

#### Step 2: Add 3MFLoader

Add 3MFLoader from Three.js:
```html
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/3MFLoader.js"></script>
```

Note: 3MFLoader requires fflate for ZIP decompression (included in Three.js examples).

Alternative: Use ES modules if r128 3MFLoader has issues:
```html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
  }
}
</script>
<script type="module">
  import { ThreeMFLoader } from 'three/addons/loaders/3MFLoader.js';
</script>
```

#### Step 3: Update open-server.ts

1. Add 3MF detection alongside STL:
```typescript
const is3MF = ext === '3mf';
const is3D = isSTL || is3MF;
```

2. Serve 3D viewer for both formats with format parameter
3. Add `/api/3mf` endpoint for raw 3MF file serving

#### Step 4: Multi-Color Rendering

3MFLoader returns a `Group` containing meshes with:
- `mesh.material.vertexColors` for per-vertex colors
- `mesh.material.color` for per-object colors
- Proper material assignments from 3MF file

Ensure scene rendering preserves these colors:
```javascript
loader.load('/api/3mf', (group) => {
  // Group contains meshes with materials already assigned
  // No need to override materials
  scene.add(group);
});
```

#### Step 5: Handle Multi-Object Files

3MF files can contain multiple objects. The Group structure preserves this:
- Each object becomes a child mesh in the group
- Center and fit based on entire group bounding box
- All objects visible by default

**Files to Modify**:

| File | Action | Description |
|------|--------|-------------|
| `packages/codev/templates/stl-viewer.html` | Rename/Modify | Generalize to `3d-viewer.html` |
| `packages/codev/src/agent-farm/servers/open-server.ts` | Modify | Add 3MF detection and API endpoint |

**Testing**:

1. Single-color 3MF file - renders with correct color
2. Multi-color 3MF file (Bambu Studio export) - each part has correct color
3. Multi-object 3MF file - all objects visible
4. Large 3MF file (>10MB) - loads without crash
5. Invalid 3MF file - shows error message
6. Verify STL files still work after refactor

**Dependencies**:
- Three.js 3MFLoader (included in Three.js examples)
- fflate (ZIP library, dependency of 3MFLoader)

**Review**: See `reviews/0061-stl-viewer-tick-002.md`
