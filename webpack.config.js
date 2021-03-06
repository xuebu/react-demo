const webpackConfigs = require('./config/webpack')
const defaultConfig = 'dev'

module.exports = (evn) => {
  // If there was no configuration give, assume default
  const requestedConfig = evn || defaultConfig

  // Return a new instance of the webpack config
  // or the default one if it cannot be found.
  let LoadedConfig = defaultConfig

  if (webpackConfigs[requestedConfig] !== undefined) {
    LoadedConfig = webpackConfigs[requestedConfig]
  } else {
    console.warn(`
      Provided environment "${evn}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfigs).join(' ')}
    `)
    LoadedConfig = webpackConfigs[defaultConfig]
  }

  const loadedInstance = new LoadedConfig()

  return loadedInstance.config
}
