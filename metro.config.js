const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Load default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Customize the resolver to include SVG files
const svgTransformerConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), // Exclude SVG from asset extensions
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'] // Add SVG to source extensions
  }
};

// Merge the custom SVG transformer configuration with the existing default configuration
module.exports = mergeConfig(defaultConfig, svgTransformerConfig);
