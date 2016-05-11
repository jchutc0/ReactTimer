var webpack = require('webpack');

module.exports = {
	entry: [
	 'script!jquery/dist/jquery.min.js',
	 'script!foundation-sites/dist/foundation.min.js',
	 './app/app.jsx'],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
		})
	],
	output: {
		path: '/var/www/vhosts/ec2-52-201-173-181.compute-1.amazonaws.com/react/timer',
		filename: './bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};
