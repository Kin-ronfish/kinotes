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
            { text: '笔记', link: '/note/' },
            { text: '作品', link: '/work/'}
        ],
        sidebar: {
            '/note/':[
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '/note/test/JS.md',
                        '/note/test/CSS.md',
                        '/note/test/php.md',
                        '/note/test/python.md',
                        '/note/test/java.md',
                        '/note/test/arduino.md'
                    ]
                },
                {
                    title: '框架',
                    collapsable: false,
                    children: [
                        '/note/test/vue.md',
                        '/note/test/nuxt.md',
                        '/note/test/react.md',
                        '/note/test/angular.md'
                    ]
                },
                {
                    title: '插件',
                    collapsable: false,
                    children: [
                        '/note/test/TS.md',
                        '/note/test/lodash.md',
                        '/note/test/babylon.md',
                        '/note/test/other.md'
                    ]
                },
                {
                    title: '工具',
                    collapsable: false,
                    children: [
                        '/note/test/uniapp.md',
                        '/note/test/eslint.md'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        '/note/test/rule.md',
                        '/note/test/linr.md'
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