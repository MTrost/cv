const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin

module.exports = withTypescript(
  withCSS({
    cssModules: true,
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      }

      return config
    }
  })
)
