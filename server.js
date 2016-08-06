const koa = require('koa')
const serve = require('koa-static')
const cacheControl = require('koa-cache-control')
const compress = require('koa-compress')

const app = koa()

app.use(cacheControl({
	public: true,
	maxAge: 604800,
	staleWhileRevalidate: 86400,
	staleIfError: 259200
}))

app.use(compress())

app.use(serve('./build'))

app.listen(3000)
