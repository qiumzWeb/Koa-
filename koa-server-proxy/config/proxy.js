/*
 * @Author: qiumingzhen 
 * @Date: 2020-01-01 23:22:53 
 * @Last Modified by: qiumingzhen
 * @Last Modified time: 2020-01-01 23:41:38
 */

export default {
    HOST: 'http://localhost:8383',
    server: [
        {
            serverName: 'q.koa.com',
            proxy: {
                '/api': 'http://localhost:2019',
            }
        },
        {
            serverName: 'm.koa.com',
            proxy: {
                '/api': 'http://localhost:2020',
            }
        },
        {
            serverName: 'z.koa.com',
            proxy: {
                '/api': 'http://localhost:2019',
            }
        }
    ]
}