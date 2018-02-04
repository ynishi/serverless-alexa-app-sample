const AlexaAppServer = require('alexa-app-server')

AlexaAppServer.start({
  server_root: __dirname,
  public_html: 'public_html',
  app_dir: 'apps',
  app_root: '/alexa/',
  port: 8080
})
