const router = require('koa-router')()

router.prefix('/group')

router.use('/a', async(ctx, next) => {
  
})

module.exports = router