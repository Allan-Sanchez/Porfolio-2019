// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  icon: './static/img/triangle.png',
  siteDescription:"Portafolio del Guatemalteco Allan Sanchez web developer,frontend and Backend ",
  plugins: [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
     tailwindConfig: './tailwind.config.js',
    //  config: './tailwind.config.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: true,
      shouldImport: true,
      shouldTimeTravel: true,
    }
  }
]
}
