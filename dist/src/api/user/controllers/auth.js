const { sanitize } = require('@strapi/utils');
module.exports = {
    // 注册用户
    async register(ctx) {
        const { email, password, username, phone, nickname } = ctx.request.body;
        if (!username || !phone) {
            return ctx.badRequest('username和phone为必填字段');
        }
        try {
            // 创建用户
            const user = await strapi
                .plugin('users-permissions')
                .service('user')
                .create({
                email,
                password,
                username,
                phone,
                nickname,
            });
            // 生成 JWT
            const token = await strapi
                .plugin('users-permissions')
                .service('auth')
                .issueToken({ id: user.id });
            // 获取用户模型 schema
            const userSchema = strapi.plugin('users-permissions').contentType('user');
            // 使用新 API 过滤返回字段
            const sanitizedUser = await sanitize.contentAPI.output(user, userSchema, { auth: ctx.state.auth });
            ctx.body = {
                user: sanitizedUser,
                token,
            };
        }
        catch (error) {
            ctx.badRequest('注册失败', error);
        }
    },
};
