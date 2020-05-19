const loginModal = require('../modals/loginModal');

const check = async (ctx, next) => {
    ctx.body = { a: '111111111' };
};

const logon = async (ctx, next) => {
    const data = ctx.request.body;
    console.log(data);
    const result = await loginModal.logon(data);
    const obj = {
        code: 200,
        data: result
    };
    ctx.body = obj;
};

module.exports = {
    check,
    logon
};
