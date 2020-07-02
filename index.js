const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const staticResource = require('koa-static');

const loginRouter = require('./src/routes/loginRouter');

const app = new Koa();
app.use(bodyparser());

app.use(views(path.join(__dirname, './static')));
app.use(async (ctx, next) => {
    if (ctx.url === '/') {
        await ctx.render('index');
    } else {
        await next();
    }
});
app.use(staticResource(path.join(__dirname, './static')));

const router = new Router();

// Router Middleware
router.use('/login', loginRouter.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('start'));
