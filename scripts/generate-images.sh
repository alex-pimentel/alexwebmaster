#!/bin/bash
# Generate project cover images using Gemini API
# Usage: GEMINI_API_KEY="your-key" ./generate-images.sh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
JSON_FILE="$SCRIPT_DIR/image-prompts.json"

if [ -z "${GEMINI_API_KEY:-}" ]; then
    echo "Error: GEMINI_API_KEY environment variable is not set"
    echo "Usage: GEMINI_API_KEY=\"your-key\" $0"
    exit 1
fi

API_URL="https://generativelanguage.googleapis.com/v1/models/gemini-3.1-flash-image:generateContent"

TOTAL=$(python3 -c "import json; print(len(json.load(open('$JSON_FILE'))))")
COUNT=0

for i in $(seq 0 $((TOTAL - 1))); do
    OUTPUT=$(python3 -c "import json; print(json.load(open('$JSON_FILE'))[$i]['output'])")
    PROMPT=$(python3 -c "import json; print(json.load(open('$JSON_FILE'))[$i]['prompt'])")
    OUTPUT_PATH="$SCRIPT_DIR/$OUTPUT"

    COUNT=$((COUNT + 1))
    echo "[$COUNT/$TOTAL] Generating: $OUTPUT"
    mkdir -p "$(dirname "$OUTPUT_PATH")"

    # Build JSON payload via stdin to avoid shell interpolation issues
    PAYLOAD=$(echo "$PROMPT" | python3 -c "
import json, sys
prompt = sys.stdin.read().strip()
print(json.dumps({
    'contents': [{
        'parts': [{'text': 'Create a professional project cover image: ' + prompt}]
    }]
}))")

    RESPONSE=$(curl -s -X POST "$API_URL" \
        -H "x-goog-api-key: $GEMINI_API_KEY" \
        -H "Content-Type: application/json" \
        -d "$PAYLOAD")

    # Check for API error
    ERROR=$(echo "$RESPONSE" | python3 -c "
import json, sys
r = json.load(sys.stdin)
if 'error' in r:
    print(r['error'].get('message', r['error']))
" 2>/dev/null || true)

    if [ -n "$ERROR" ]; then
        echo "  Error: $ERROR"
        continue
    fi

    # Extract base64 image data via stdin
    BASE64=$(echo "$RESPONSE" | python3 -c "
import json, sys
r = json.load(sys.stdin)
for p in r.get('candidates', [{}])[0].get('content', {}).get('parts', []):
    if 'inlineData' in p:
        print(p['inlineData']['data'])
        break
" 2>/dev/null || true)

    if [ -z "$BASE64" ]; then
        echo "  Error: No image data in response"
        echo "  Keys in response: $(echo "$RESPONSE" | python3 -c "import json,sys; print(list(json.load(sys.stdin).keys()))" 2>/dev/null)"
        continue
    fi

    echo "$BASE64" | base64 -d > "$OUTPUT_PATH"
    SIZE=$(wc -c < "$OUTPUT_PATH" | tr -d ' ')
    echo "  Saved: $OUTPUT ($SIZE bytes)"

    sleep 1
done

echo "Done! $COUNT images generated."
