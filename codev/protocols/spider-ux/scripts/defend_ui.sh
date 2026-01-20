#!/bin/bash
# SPIDER-UX Defense Script Template
# This script automates the environment setup for UI verification
#
# Usage: ./scripts/defend_ui.sh [options]
# Options:
#   --port PORT      Dev server port (default: 3000)
#   --scenario NAME  Test specific scenario (success, empty, error)
#   --mobile         Run mobile viewport tests only
#   --all            Run all verification checks
#
# Prerequisites:
#   - npm/node installed
#   - Playwright MCP server configured
#   - MSW handlers set up
#   - wait-on package available (npx wait-on)

set -e

# Configuration
PORT="${PORT:-3000}"
BASE_URL="http://localhost:$PORT"
TIMEOUT=60000

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

cleanup() {
    log_info "Cleaning up..."
    if [ -n "$DEV_PID" ]; then
        kill $DEV_PID 2>/dev/null || true
    fi
}

trap cleanup EXIT

# Parse arguments
SCENARIO=""
MOBILE_ONLY=false
RUN_ALL=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --port)
            PORT="$2"
            BASE_URL="http://localhost:$PORT"
            shift 2
            ;;
        --scenario)
            SCENARIO="$2"
            shift 2
            ;;
        --mobile)
            MOBILE_ONLY=true
            shift
            ;;
        --all)
            RUN_ALL=true
            shift
            ;;
        *)
            log_error "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Step 1: Start the dev server with mocks enabled
log_info "Starting dev server with MSW mocks enabled on port $PORT..."
NEXT_PUBLIC_USE_MOCKS=true npm run dev -- --port $PORT &
DEV_PID=$!

# Step 2: Wait for server to be ready
log_info "Waiting for server to be ready at $BASE_URL..."
npx wait-on "$BASE_URL" --timeout $TIMEOUT

if [ $? -ne 0 ]; then
    log_error "Server failed to start within timeout"
    exit 1
fi

log_info "Server is ready!"

# Step 3: Build the verification prompt based on options
VERIFY_PROMPT="Connect to $BASE_URL. Use Playwright MCP to verify the UI."

if [ -n "$SCENARIO" ]; then
    VERIFY_PROMPT="$VERIFY_PROMPT Test the '$SCENARIO' scenario specifically."
fi

if [ "$MOBILE_ONLY" = true ]; then
    VERIFY_PROMPT="$VERIFY_PROMPT Focus on mobile viewport (375px) verification."
fi

if [ "$RUN_ALL" = true ]; then
    VERIFY_PROMPT="$VERIFY_PROMPT Run comprehensive verification:
    1. Check all State Matrix states (Initial, Loading, Success, Empty, Error)
    2. Verify semantic contract (ARIA roles, data-testid attributes)
    3. Test responsive layouts at 375px, 768px, and 1024px
    4. Check for console errors
    5. Verify no horizontal overflow on mobile"
fi

# Step 4: Invoke Claude agent for verification
log_info "Invoking Claude agent for UI verification..."
echo ""
echo "=========================================="
echo "VERIFICATION PROMPT"
echo "=========================================="
echo "$VERIFY_PROMPT"
echo "=========================================="
echo ""

# Note: In actual usage, this would invoke the Claude CLI
# claude -p "$VERIFY_PROMPT"
#
# For now, we output the prompt for manual verification
log_warn "To run verification, execute the following in your Claude Code session:"
echo ""
echo "  Use Playwright MCP to verify the UI at $BASE_URL"
echo ""

# Keep server running for manual testing
log_info "Dev server running at $BASE_URL"
log_info "Press Ctrl+C to stop"

wait $DEV_PID
