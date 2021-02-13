# Commands used in this project

- npm install webpack@4.32.2 -D -E
- npm install webpack-cli@3.3.2 -D E
- npx webpack --entry ./index.js --output ./bundle.js
- npx webpack --entry ./index.js --output ./bundle.js --mode development

We can configure the file "webpack.config.js" so we can use the command npx webpack to create the bundle file.


## Notes

path.resolve(__dirname, 'dist') : __dirname is used to get the directory name in which is the project running.