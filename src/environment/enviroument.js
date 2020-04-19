var _Environments = {

  production:  {
    SERVER_URL: '',
    GEOCODE_KEY: '',
  },
  
  production:  {
    SERVER_URL: '',
    GEOCODE_KEY: '',
  },

  production:  {
    SERVER_URL: '',
    GEOCODE_KEY: '',
  },

}

function getPlatform(n) {
  switch(n) {
    case 0:
      return 'production'
      break;
    case 1:
      return 'staging'
      break;
    case 2:
      return 'production'
      break;
  }
}

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = getPlatform(0)

  // ...now return the correct environment
  return _Environments[platform]
}

var Environment = getEnvironment()
module.exports = Environment
