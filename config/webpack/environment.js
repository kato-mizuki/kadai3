const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
enviromment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugins({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: 'popper.js'
  })
  )