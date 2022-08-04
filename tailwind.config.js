module.exports = {
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	// content: [
	// 	'./src/**/*.{html,js}', 
	// 	'./node_modules/tw-elements/dist/js/**/*.js'
	// 		],
	theme: {
		screens:{
			'mxmd':{'max':'767px'}, 
			'mxsm':{'max':'639px'}, 
			'xsmw':{'max':'475px'}, 
			'xm' :{'max' : '320px'},
			'xxs':'320px',
			'xs': '475px',
			'sm': '640px',
      		'md': '768px',
      		'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'xmm':{'min':'475px' , 'max':'768px'}
			
		},
		
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' ),
		require('tw-elements/dist/plugin')
	]
}