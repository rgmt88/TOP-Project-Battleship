import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'docs'),
    clean: true, // Cleans the output directory before each build
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Rule for images
        type: 'asset/resource', // Handles images as separate files
        generator: {
          filename: 'images/[name][ext]', // Customize output path for images
        },
      },
      {
        test: /\.(mp3|wav|ogg)$/i, // Rule for audio files
        type: 'asset/resource', // Handles audio as separate files
        generator: {
          filename: 'sounds/[name][ext]', // Customize output path for audio files
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your template
      filename: 'index.html', // Name of the output HTML file
      inject: 'body',
    }),
  ],
  mode: 'development',
};

