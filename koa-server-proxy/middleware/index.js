/*
 * @Author: qiumingzhen 
 * @Date: 2020-01-01 23:22:24 
 * @Last Modified by: qiumingzhen
 * @Last Modified time: 2020-01-01 23:46:51
 */

import Router from 'koa-router'
import cors from 'koa2-cors'
import koaBody from 'koa-body'
import proxy from './proxy'
import { proxyConfig } from '../config'
import koaProxy from 'koa-proxy'
const router = new Router({
    // prefix: '/api'
})
export default app => {
    app.use(koaBody())
    app.use(cors())
    app.use(router.routes()).use(router.allowedMethods())    
    app.use(proxy(koaProxy))
    app.use(koaProxy({
        host: proxyConfig.HOST
    }))
}
