# Commands used in this project

- npm install webpack@4.32.2 -D -E
- npm install webpack-cli@3.3.2 -D E
- npx webpack --entry ./index.js --output ./bundle.js
- npx webpack --entry ./index.js --output ./bundle.js --mode development
- npm install -D -E css-loader@2.1.1 (for css-style-loader folder)
- npm install -D -E style-loader (for css-style-loader folder)
- npm install -D -E mini-css-extract-plugin@0.7.0 html-webpack-plugin@3.2.0

We can configure the file "webpack.config.js" so we can use the command npx webpack to create the bundle file.


## Notes

path.resolve(__dirname, 'dist') : __dirname is used to get the directory name in which is the project running.