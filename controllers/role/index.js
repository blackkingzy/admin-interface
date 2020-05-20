exports.add = (req, res, next) => {
    // body中的key值没用，不用存
    console.log(req.body)
    res.send({
        code: 20000,
        msg: '添加成功'
    })
}

exports.update = (req, res, next) => {
    // body中的key值没用，不用存
    console.log(req.params)
    console.log(req.body)
    res.send({
        code: 20000,
        msg: '添加成功'
    })
}














exports.getRoutes = function (req, res, next) {
    const routes = [
        {
            path: '/',
            // component: Layout,
            redirect: '/dashboard',
            name: 'Dashboard',
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    // component: () => import('@/views/dashboard/index'),
                    meta: { title: 'Dashboard', icon: 'dashboard' }
                }
            ]
        },
        {
            path: '/example',
            // component: Layout,
            redirect: '/example/table',
            name: 'Example',
            meta: { title: 'Example', icon: 'example' },
            children: [
                {
                    path: 'table',
                    name: 'Table',
                    // component: () => import('@/views/table/index'),
                    meta: { title: 'Table', icon: 'table' }
                },
                {
                    path: 'tree',
                    name: 'Tree',
                    // component: () => import('@/views/tree/index'),
                    meta: { title: 'Tree', icon: 'tree' }
                }
            ]
        },

        {
            path: '/form',
            // component: Layout,
            name: 'Form',
            children: [
                {
                    path: 'index',
                    name: 'Form',
                    // component: () => import('@/views/form/index'),
                    meta: { title: 'Form', icon: 'form' }
                }
            ]
        },

        {
            path: '/nested',
            // component: Layout,
            redirect: '/nested/menu1/menu1-1',
            name: 'Nested',
            meta: {
                title: 'Nested',
                icon: 'nested'
            },
            children: [
                {
                    path: 'menu1',
                    // component: () => import('@/views/nested/menu1/index'), // Parent router-view
                    name: 'Menu1',
                    redirect: 'noRedirect', //面包屑置灰，不可点击
                    meta: { title: 'Menu1' },
                    children: [
                        {
                            path: 'menu1-1',
                            // component: () => import('@/views/nested/menu1/menu1-1'),
                            name: 'Menu1-1',
                            meta: { title: 'Menu1-1' }
                        },
                        {
                            path: 'menu1-2',
                            // component: () => import('@/views/nested/menu1/menu1-2'),
                            name: 'Menu1-2',
                            redirect: '/nested/menu1/menu1-2/menu1-2-1',
                            meta: { title: 'Menu1-2' },
                            children: [
                                {
                                    path: 'menu1-2-1',
                                    // component: () =>
                                    //     import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                    name: 'Menu1-2-1',
                                    meta: { title: 'Menu1-2-1' }
                                },
                                {
                                    path: 'menu1-2-2',
                                    // component: () =>
                                    //     import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                    name: 'Menu1-2-2',
                                    meta: { title: 'Menu1-2-2' }
                                }
                            ]
                        },
                        {
                            path: 'menu1-3',
                            // component: () => import('@/views/nested/menu1/menu1-3'),
                            name: 'Menu1-3',
                            meta: { title: 'Menu1-3' }
                        }
                    ]
                },
                {
                    path: 'menu2',
                    // component: () => import('@/views/nested/menu2/index'),
                    meta: { title: 'menu2' }
                }
            ]
        },

        {
            path: '/external-link',
            // component: Layout,
            name: 'external-link',
            children: [
                {
                    path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                    meta: { title: 'External Link', icon: 'link' }
                }
            ]
        },
        {
            path: '/article',
            // component: Layout,
            redirect: '/article/list',
            name: 'Article',
            meta: { title: 'Article Manage', icon: '' },
            children: [
                {
                    path: 'list',
                    name: 'List',
                    // component: () => import('@/views/article/list/index'),
                    meta: { title: 'Article List', icon: '' }
                },
                {
                    path: 'create',
                    name: 'Create',
                    // component: () => import('@/views/article/create/index'),
                    meta: { title: 'Create Article', icon: '' }
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    hidden: true,
                    // component: () => import('@/views/article/edit/index'),
                    meta: { title: 'Edit Article' }
                }
            ]
        },
        // 权限管理路由
        {
            path: '/permission',
            // component: Layout,
            redirect: '/permission/role',
            alwaysShow: true,
            name: 'Permission',
            meta: { title: 'Permission', icon: '' },
            children: [
                {
                    path: 'role',
                    name: 'role',
                    // component: () => import('@/views/permission/role.vue'),
                    meta: { title: 'Role Permission', icon: '' }
                }
            ]
        }
    ]

    res.send({
        code: 20000,
        routes: routes
    })
}