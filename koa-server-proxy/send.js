export default () => {
    const handle = (ctx, { httpCode, status, msg, data }) => {
        ctx.set("Content-Type", "application/json")
        ctx.status = httpCode
        ctx.body = {
            "status": status,
            "msg": msg,
            "data": data
        }
    }
    const error = (ctx) => {
        return ({ httpCode = 500, status = 0, msg = '系统错误', data = null }) => {
            handle(ctx, { httpCode, status, msg, data })
        }
    }
    const warning = (ctx) => {
        return ({ httpCode = 200, status = 0, msg = '系统异常', data }) => {
            handle(ctx, { httpCode, status, msg, data })
        }
    }
    const success = (ctx) => {
        return ({ httpCode = 200, status = 1, msg = '成功', data }) => {
            handle(ctx, { httpCode, status, msg, data })
        }
    }
    return async (ctx, next) => {
        ctx.error = error(ctx);
        ctx.warning = warning(ctx);
        ctx.success = success(ctx);
        await next()
    }
}
