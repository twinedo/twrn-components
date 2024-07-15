module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests'],
        'assets': './src/assets',
        'components': './src/components',
        'styles': './src/styles',
      },
    }]
  ]
};
