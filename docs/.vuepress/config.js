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
        // repo: 'Kin-ronfish/kinote',
        // repoLabel: 'GitHub',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            {text: '前端', link: '/front/'},
            { text: '兴趣', link: '/hobby/'}
        ],
        sidebar: {
            '/front/':['',{
                title: '常用工具',
                collapsable: false,
                children: [
                    '/front/test/tool.md'
                ]
            },
            {
                title: '基础笔记',
                collapsable: false,
                children: [
                    '/front/test/JavaScript.md',
                    '/front/test/CSS.md'
                ]
            },{
                title: '常用框架',
                collapsable: false,
                children: [
                    '/front/test/frame.md'
                ]
            },{
                title: '常用插件',
                collapsable: false,
                children: [
                    '/front/test/plugins.md'
                ]
            },{
                title: '方法案例',
                collapsable: false,
                children: [
                    '/front/test/method.md'
                ]
            }],
            '/hobby/': ['']
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