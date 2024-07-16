const router = require('koa-router')()

router.prefix('/users')

router.get('/', async(ctx, next) => {
  ctx.body = 'users 响应'
})

router.get('/bar', async(ctx, next) => {
  ctx.body = 'bar 响应'
})

module.exports = router