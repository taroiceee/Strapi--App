module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/register', // 注册接口路径
        handler: 'auth.register', // 对应控制器中的方法
        config: {
          policies: [], // 允许匿名用户访问
        },
      },
    ],
  };