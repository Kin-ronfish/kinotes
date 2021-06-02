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
        lastUpdated: 'Last Updated',
        repo: 'Kin-ronfish/kinote',
        repoLabel: 'GitHub',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '基础', link: '/base/'},
            { text: '框架', link: '/framework/'},
            { text: '插件', link: '/plugins/'},
            { text: '笔记', link: '/note/'}
        ],
        sidebar: {
            '/base/':['',{
                title: '学习笔记',
                collapsable: false,
                children: [
                    '/base/test/JavaScript.md',
                    '/base/test/ES6.md',
                    '/base/test/CSS.md'
                ]
            },{
                title: '参考笔记',
                collapsable: false,
                children: [
                    '/base/other/安全.md',
                    '/base/other/框架.md',
                    '/base/other/浏览器.md',
                    '/base/other/数据结构.md',
                    '/base/other/算法.md',
                    '/base/other/网络相关.md',
                    '/base/other/网络协议.md',
                    '/base/other/JavaScript.md',
                    '/base/other/JSmethod.md',
                    '/base/other/sort.md'
                ]
            }],
            '/framework/':['',{
                title: '学习笔记',
                collapsable: false,
                children: [
                    '/framework/test/Nuxt.md',
                    '/framework/test/React.md',
                    '/framework/test/Vue.md'
                ]
            },{
                title: '参考笔记',
                collapsable: false,
                children: [
                    '/framework/other/react.md',
                    '/framework/other/vue.md'
                ]
            }],
            '/plugins/':['',{
                title: '学习笔记',
                collapsable: false,
                children: [
                    '/plugins/test/Typescript.md'
                ]
            }],
            '/note/': ['']
        }
    },
    plugins: [
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/google-analytics',
        {
            'ga': 'UA-00000000-0' // UA-00000000-0
        },
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ],
    dest: 'public'
}