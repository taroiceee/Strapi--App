export default {
    routes: [
        {
            method: 'GET',
            path: '/students',
            handler: 'student.find',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/students/:id',
            handler: 'student.findOne',
          },
          
        {
            method: 'POST',
            path: '/students/delete',
            handler: 'student.customDelete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/students/create',
            handler: 'student.customCreate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/students/update',
            handler: 'student.customUpdate',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
