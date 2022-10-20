module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ico,jpg,svg,png,jfif,mp4,html,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};