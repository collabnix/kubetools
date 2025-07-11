#!/bin/bash
# Complete fix for ajeetraina/kubetools codespell issues (macOS/Linux compatible)

echo "🔧 Fixing CodeSpell issues in ajeetraina/kubetools repository"

# Check if we're on macOS or Linux for sed compatibility
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    SED_INPLACE="sed -i ''"
else
    # Linux
    SED_INPLACE="sed -i"
fi

# Step 1: Fix the main spelling errors in README.md
echo "📝 Fixing spelling errors in README.md..."

# Fix "Developement" -> "Development" (this is the main one causing build failure)
$SED_INPLACE 's/Developement Tools\/Kit/Development Tools\/Kit/g' README.md
$SED_INPLACE 's/Developement/Development/g' README.md

# Fix other potential issues based on the logs
$SED_INPLACE 's/kubernentes/kubernetes/g' README.md
$SED_INPLACE 's/Kubernets/Kubernetes/g' README.md
$SED_INPLACE 's/bandwith/bandwidth/g' README.md
$SED_INPLACE 's/objets/objects/g' README.md
$SED_INPLACE 's/foor/for/g' README.md
$SED_INPLACE 's/Funktion/Function/g' README.md
$SED_INPLACE 's/funktion/function/g' README.md

echo "✅ Fixed spelling errors in README.md"

# Step 2: Create .codespellrc to handle false positives
echo "⚙️ Creating .codespellrc configuration..."

cat > .codespellrc << 'EOF'
[codespell]
# Ignore legitimate terms that codespell flags incorrectly
ignore-words-list = rouge

# Skip files that commonly have false positives
skip = ./.git,./Gemfile.lock,./vendor,./node_modules,*.png,*.jpg,*.jpeg,*.pdf,*.svg,*.ico

# Check filenames too
check-filenames = true

# Don't check hidden files
check-hidden = false
EOF

echo "✅ Created .codespellrc configuration"

# Step 3: Update the GitHub Actions workflow for better configuration
echo "🔄 Updating GitHub Actions workflow..."

mkdir -p .github/workflows

cat > .github/workflows/codespell.yml << 'EOF'
name: CodeSpell Integration
on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["master"]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Codespell
        uses: codespell-project/actions-codespell@v2
        with:
          # Skip files that commonly have false positives
          skip: "Gemfile.lock,vendor"
          
          # Ignore words that are legitimate but flagged as errors
          ignore_words_list: "rouge"
          
          # Check filenames too
          check_filenames: true
          check_hidden: false
EOF

echo "✅ Updated GitHub Actions workflow"

# Step 4: Show what was changed
echo "📋 Summary of changes made:"
echo "  - Fixed 'Developement' -> 'Development' in README.md"
echo "  - Fixed other spelling errors"
echo "  - Created .codespellrc configuration"
echo "  - Updated GitHub Actions workflow"

# Step 5: Test the fixes locally (if codespell is installed)
echo "🧪 Testing fixes..."

if command -v codespell &> /dev/null; then
    echo "Running codespell to verify fixes..."
    if codespell --config .codespellrc; then
        echo "✅ All spelling errors fixed!"
    else
        echo "⚠️  Some issues may remain - check output above"
    fi
else
    echo "ℹ️  Install codespell to verify: pip install codespell"
fi

echo ""
echo "🎯 Next steps:"
echo "1. Review the changes: git diff"
echo "2. Commit the changes: git add . && git commit -m 'Fix spelling errors and configure codespell'"
echo "3. Push to trigger build: git push"
echo ""
echo "🚀 Your build should now pass!"
