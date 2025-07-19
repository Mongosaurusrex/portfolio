cd ../quartz

# 1. Build Quartz
npx quartz build

# 2. Copy into portfolio public folder
rm -rf ../portfolio/public/notes
mkdir -p ../portfolio/public/notes
cp -r public/* ../portfolio/public/notes

# 3. Rewrite internal href/src paths to work under /notes/
find ../portfolio/public/notes -type f -name "*.html" -exec sed -i '' 's|href="/|href="/notes/|g' {} +
find ../portfolio/public/notes -type f -name "*.html" -exec sed -i '' 's|src="/|src="/notes/|g' {} +
