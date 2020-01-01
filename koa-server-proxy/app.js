
require('babel-core/register') // babel编译
const Koa = require('koa'); // Koa 为一个class
const Router = require('koa-router')
const cors = require('koa2-cors');
const koaBody = require('koa-body')
const router = new Router({
    prefix: '/api'
})
const app = new Koa();
app.use(koaBody())
app.use(cors())

router.post('/hello/name', async (ctx, next) => {
    ctx.body = {
        data: ctx.request.body,
        msg: 'success',
        status: 'ok'
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(2020, () => {
  console.log('This server is running at http://localhost:2020')
})