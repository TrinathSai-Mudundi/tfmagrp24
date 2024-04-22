// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// module.exports = async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);
//   return mergeConfig(defaultConfig, {
//     resolver: {
//       assetExts: [...defaultConfig.resolver.assetExts, 'csv'], // Add 'csv' as an asset extension
//     },
//   });
// };


const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
