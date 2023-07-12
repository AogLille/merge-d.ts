const path = require('path')
// const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin') //会报错TypeError: compiler.plugin is not a function
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
	mode: 'production',
	entry: './src/main.ts',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		// new DeclarationBundlerPlugin({
		// 	moduleName: 'yourModuleName',
		// 	out: './dist/yourModuleName.d.ts',
		// }),
		new DtsBundleWebpack({
			name: 'your',
			main: './dist/**/*.d.ts',
			out: './dts/index.d.ts',
			removeSource: true,
			outputAsModuleFolder: true,
		}),
		// new CleanWebpackPlugin(),
		// new DeclarationBundlerPlugin({
		// 	moduleName: 'dts',
		// 	out: './dist/types.d.ts',
		// }),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
}
