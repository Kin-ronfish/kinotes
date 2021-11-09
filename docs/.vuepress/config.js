// 用于设置路由
module.exports = {
    title: 'Kinron',
    description: 'Kinron的博客',
    base: '/',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/Kin.ico'
            }
        ]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@': '../.vuepress',
                '@assets': './public/assets',
                '@public': './public',
            }
        }
    },
    themeConfig: {
        logo: '/assets/Kin.ico',
        navbar: true,
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        // lastUpdated: 'Last Updated',
        // repo: 'Kin-ronfish/kinotes',
        // repoLabel: 'GitHub',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '前端', link: '/note/' },
            { text: '后端', link: '/end/'},
            { text: '硬件', link: '/hardware/'},
            { text: '其他', link: '/other/'}
        ],
        sidebar: {
            '/note/':[
                {
                    title: '基础笔记',
                    collapsable: false,
                    children: [
                        '/note/test/JS.md',
                        '/note/test/CSS.md'
                    ]
                },
                {
                    title: '框架笔记',
                    collapsable: false,
                    children: [
                        '/note/test/vue.md',
                        '/note/test/nuxt.md',
                        '/note/test/react.md',
                        '/note/test/angular.md'
                    ]
                },
                {
                    title: '插件笔记',
                    collapsable: false,
                    children: [
                        '/note/test/TS.md',
                        '/note/test/loadsh.md',
                        '/note/test/other1.md'
                    ]
                },
                {
                    title: '工具方案',
                    collapsable: false,
                    children: [
                        '/note/test/uniapp.md',
                        '/note/test/other2.md'
                    ]
                }
            ],
            '/end/': [
                {
                    title: '基础笔记',
                    collapsable: false,
                    children: [
                        '/end/test/php.md',
                        '/end/test/python.md'
                    ]
                }
            ],
            '/hardware/': [
                {
                    title: '基础笔记',
                    collapsable: false,
                    children: [
                        '/hardware/test/arduino.md'
                    ]
                }
            ],
            '/other/':[
                {
                    title: '开发工具',
                    collapsable: false,
                    children: [
                        '/other/test/tool.md'
                    ]
                },{
                    title: '代码规范',
                    collapsable: false,
                    children: [
                        '/other/test/rule.md'
                    ]
                },{
                    title: '方法整合',
                    collapsable: false,
                    children: [
                        '/other/test/linr.md'
                    ]
                }
            ]
        }
    },
    plugins: [
        // '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ],
    dest: 'public'
}