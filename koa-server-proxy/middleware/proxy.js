/*
 * @Author: qiumingzhen 
 * @Date: 2020-01-01 23:22:32 
 * @Last Modified by: qiumingzhen
 * @Last Modified time: 2020-01-01 23:47:24
 */
import { proxyConfig } from '../config'
export default Proxy => {
    let { server } = proxyConfig
    return async function proxy(ctx, next) {
        let url = ctx.url
        let host = ctx.host
        console.log(host, url)
        server.forEach(c => {
            if (host === c.serverName) {
                Object.keys(c.proxy).forEach(key => {
                    if (url.indexOf(key) > -1) {
                        (0, Proxy({
                            host: c.proxy[key]
                        }))(ctx, next)
                    }
                })
            }
        })
        return next()
    }
}