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
            { text: '前端', link: '/front/'},
            { text: '兴趣', link: '/hobby/'},
            { text: '总结', link: '/note/'}
        ],
        sidebar: {
            '/front/':['',
            {
                title: '基础语言',
                collapsable: false,
                children: [
                    '/front/test/JavaScript.md',
                    '/front/test/CSS.md'
                ]
            },
            {
                title: '框架插件',
                collapsable: false,
                children: [
                    '/front/test/frame.md',
                    '/front/test/plugins.md'
                ]
            },
            {
                title: '小程序',
                collapsable: false,
                children: [
                    '/front/test/Applets.md'
                ]
            }],
            '/hobby/': ['', {
                collapsable: false,
                children: [
                    '/hobby/test/绘画.md',
                    '/hobby/test/cook.md',
                    '/hobby/test/DIY.md'
                ]
            }],
            '/note/': ['']
        }
    },
    plugins: [
        // '@vuepress/last-updated',
        // '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ],
    dest: 'public'
}