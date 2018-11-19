/** @format */
module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-transform-spread',
		'@babel/plugin-proposal-object-rest-spread',
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'createElement',
			},
		],
		'@babel/plugin-proposal-async-generator-functions',
	],
};
