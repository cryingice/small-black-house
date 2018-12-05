const path = require('path');const webpack = require('webpack');const HtmlWebpackPlugin = require('html-webpack-plugin');const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');const eslintFormatter = require('react-dev-utils/eslintFormatter');const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [    require.resolve('react-dev-utils/webpackHotDevClient'),    require.resolve('./polyfills'),    require.resolve('react-error-overlay'),    'src/index.js'
    ],
    output: {
      path: '/build/',
      pathinfo: true,
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: '',
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
      alias: {      'react-native': 'react-native-web',
      },
      plugins: [      new ModuleScopePlugin('/src'),
      ],
    },  module: {
      strictExportPresence: true,
      rules: [{
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [{
          options: {
            formatter: eslintFormatter,
          },
          loader: require.resolve('eslint-loader'),
        }, ],
        include: 'src',
      }, {
        exclude: [/\.html$/,/\.(js|jsx)$/,/\.css$/,/\.json$/,/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }, {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }, {
        test: /\.(js|jsx)$/,
        include: 'src',
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      }, {
        test: /\.css$/,
        use: [        require.resolve('style-loader'), {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          }, {
            loader: require.resolve('postcss-loader'),
            options: {
            },
          },
        ],
      }, ],
    },
    plugins: [    
        new InterpolateHtmlPlugin({
        NODE_ENV:'development',
        PUBLIC_URL:''
      }),
        new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
      }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({      'process.env':{
          NODE_ENV:"development",
          PUBLIC_URL:'" "'
        }
      }),
      new webpack.HotModuleReplacementPlugin(),   
      new CaseSensitivePathsPlugin(),    
      new WatchMissingNodeModulesPlugin(paths.appNodeModules),    
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    performance: {
      hints: false,
    },
  };