/*
 * @Author: qiumingzhen 
 * @Date: 2020-01-01 23:20:24 
 * @Last Modified by: qiumingzhen
 * @Last Modified time: 2020-01-01 23:39:44
 */
/**
 * Koa 代理转发服务
 */
import Koa from 'koa'
import koaMiddleware from './middleware'

const app = new Koa()
// koa 中间件
koaMiddleware(app)
// 启动服务
app.listen(80, () => {
  console.log('This proxy server is running')
})