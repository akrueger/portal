const koa = require('koa')
const http = require('http')
const https = require('https')
const fs = require('fs')
const enforceHttps = require('koa-sslify')
const serve = require('koa-static')
const cacheControl = require('koa-cache-control')
const compress = require('koa-compress')

const app = koa()

// Force HTTPS on all page
app.use(enforceHttps())

app.use(cacheControl({
	public: true,
	maxAge: 604800,
	staleWhileRevalidate: 86400,
	staleIfError: 259200
}))

app.use(compress())

app.use(serve('./build'))

// SSL options
const options = {
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.crt')
}

http.createServer(app.callback()).listen(80)
https.createServer(options, app.callback()).listen(443)
