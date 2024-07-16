const router = require('koa-router')()

// 试图渲染 ctx.render 方法不是koa2自身的方法，是通过koa-views中间件绑定到ctx的上下文的
router.get('/', async(ctx, next) => {
  await ctx.render('index', {
    title: 'Hello koa2'
  })
})

// ctx.body 是一个字符串
router.get('/string', async(ctx, next) => {
  ctx.body = 'koa2 string'
})

// ctx.body是个json
router.get('/json', async(ctx, next) => {
  const ctx_url = ctx.url
  // 从request中获取get请求
  const req_query = ctx.request.query
  const req_querystring = ctx.request.querystring
  // 从上下文中直接获取
  const ctx_query = ctx.query
  const ctx_querystring = ctx.querystring
  ctx.body = {
    title: 'koas json',
    ctx_query: ctx_query,
    ctx_querystring: ctx_querystring,
    req_query: req_query,
    req_querystring: req_querystring,
    ctx_url: ctx_url
  }
})

// 动态路由 http://127.0.0.1:3001/product/3333
router.get('/product/:aid', async(ctx, next) => {
  console.log(ctx.params) // 获取动态路由的数据 { aid: 3333 }
  ctx.body = ctx.params
})

module.exports = router

/**
 * 可以通过中间件在ctx挂载一些业务方法，
 * 比如统一处理接口响应的json约定格式方法
 * */ 