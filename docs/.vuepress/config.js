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
            { text: '前端', link: '/front/' },
            { text: '日常', link: '/day/' },
            { text: '作品', link: '/works/'}
        ],
        sidebar: {
            '/front/':[
                {
                    title: '语法基础',
                    collapsable: false,
                    children: [
                        '/front/base/JS.md',
                        '/front/base/CSS.md',
                        '/front/base/typescript.md',
                        '/front/base/php.md',
                        '/front/base/python.md'
                    ]
                },
                {
                    title: '框架用法',
                    collapsable: false,
                    children: [
                        '/front/frame/vue.md',
                        '/front/frame/react.md',
                        '/front/frame/babylon.md',
                        '/front/frame/three.md',
                        '/front/frame/ui.md',
                        '/front/frame/uniapp.md',
                        '/front/frame/plugin.md'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        '/front/other/rule.md',
                        '/front/other/method.md',
                        '/front/other/项目总结.md'
                    ]
                }
            ],
            '/day/': [
                {
                    title: '综合提升',
                    collapsable: false,
                    children: [
                        '/day/test/规划第一年.md',
                        '/day/test/视频学习.md',
                        '/day/test/素质学习.md',
                        '/day/test/认知误区.md'
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