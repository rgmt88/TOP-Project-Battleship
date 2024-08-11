#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Step 1: Initialize Node.js project
echo "Initializing Node.js project..."
npm init -y

# Step 2: Create a .gitignore file and ignore node_modules
echo "Creating .gitignore file..."
echo "node_modules" > .gitignore

# Step 3: Install Webpack and Webpack CLI as development dependencies
echo "Installing Webpack and Webpack CLI..."
npm install --save-dev webpack webpack-cli

# Step 4: Set Node.js to use ES6 modules
echo "Configuring Node.js to use ES6 modules..."
# Add "type": "module" to package.json
sed -i 's/"main": "index.js",/"main": "index.js",\n  "type": "module",/' package.json

# Step 5: Create basic Webpack configuration file
echo "Creating Webpack configuration file..."
cat <<EOL > webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
EOL

# Step 6: Create src directory and initial index.js file
echo "Creating src directory and initial index.js file..."
mkdir -p src
echo "console.log('Hello, The Odin Project!');" > src/index.js

# Step 7: Install Babel to transpile ES6 code
echo "Installing Babel..."
npm install --save-dev @babel/core @babel/preset-env babel-loader

# Step 8: Create Babel configuration file
echo "Creating Babel configuration file..."
cat <<EOL > .babelrc
{
  "presets": ["@babel/preset-env"]
}
EOL

echo "Project setup complete. You're ready to start coding!"