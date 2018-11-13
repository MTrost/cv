const path = require('path')
const cssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const IS_DEV = process.env.NODE_ENV !== 'production'

const plugins = [cssNested(), postcssPresetEnv()]

if (!IS_DEV) {
  plugins.push(cssnano())
}

module.exports = {
  plugins
}
