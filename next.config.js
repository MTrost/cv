const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const { withPlugins } = require('next-compose-plugins')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const reponame = 'cv'

module.exports = withPlugins(
  [
    withTypescript,
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[local]--[hash:base64:5]'
        },
        [PHASE_PRODUCTION_BUILD]: {
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[hash:base64:4]'
          }
        }
      }
    ]
  ],
  {
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${reponame}` : '',
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      }

      return config
    }
  }
)
