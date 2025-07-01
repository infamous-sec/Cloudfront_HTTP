#!/bin/bash
# Run this script after each Twake build to obfuscate JS/CSS in the built static directory.
# You will need `javascript-obfuscator` and/or cssnano globally or in a build container.

set -e

TARGET_DIR="./static"  # Adjust path as needed

if ! command -v javascript-obfuscator &> /dev/null; then
    echo "javascript-obfuscator not found! Install with 'npm i -g javascript-obfuscator'"
    exit 1
fi

find "$TARGET_DIR" -name "*.js" -exec javascript-obfuscator {} --output {} \;

# For CSS (optional)
if ! command -v cssnano &> /dev/null; then
    echo "cssnano not found! Install with 'npm i -g cssnano'"
else
    find "$TARGET_DIR" -name "*.css" -exec cssnano {} {} \;
fi