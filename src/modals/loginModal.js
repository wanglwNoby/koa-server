const logon = async (data) => {
    // 调取数据库，验证data
    // const result = await
    if (data.name === 'admin' && data.password === 'netinfo,123') {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    logon
};
