author: qiumingzhen

## HOST 需要代理转发的主服务
    HOST: 'http://localhost:8383',
## server 接口代理

### serverName 服务环境
### proxy 对应地址转发至相应接口地址
    server: [
        {
            serverName: 'q.koa.dev.com',
            proxy: {
                '/api': 'http://localhost:2019',
            }
        },
        {
            serverName: 'm.koa.uat.com',
            proxy: {
                '/api': 'http://localhost:2020',
            }
        },
        {
            serverName: 'z.koa.prod.com',
            proxy: {
                '/api': 'http://localhost:2019',
            }
        }
    ]