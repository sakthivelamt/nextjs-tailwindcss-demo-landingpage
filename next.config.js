const path = require('path')

module.exports = {
	i18n: {
		locales: ['en-US'],
    defaultLocale: 'en-US',
	reactStrictMode: true,
	},
	trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	
}