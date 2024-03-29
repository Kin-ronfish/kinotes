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
        // repo: 'Kin-ronfish/kinotes',
        // repoLabel: 'GitHub',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '前端', link: '/front/' },
            { text: '旧版', link: '/abandon/' }
        ],
        sidebar: {
            '/front/':[
                {
                    title: '前端基础',
                    collapsable: false,
                    children: [
                        '/front/base/JS.md',
                        '/front/base/CSS.md',
                        '/front/base/typescript.md'
                    ]
                },
                {
                    title: '后端基础',
                    collapsable: false,
                    children: [
                        '/front/base/node.md',
                        '/front/base/php.md',
                        '/front/base/python.md'
                    ]
                },
                {
                    title: '前端框架',
                    collapsable: false,
                    children: [
                        '/front/frame/vue.md',
                        '/front/frame/react.md',
                    ]
                },
                {
                    title: '应用框架',
                    collapsable: false,
                    children: [
                        '/front/frame/uniapp.md',
                        '/front/frame/wxapp.md',
                        '/front/frame/hint.md'
                    ]
                }
            ],
            '/abandon/':[
                {
                    title: '旧版笔记',
                    collapsable: false,
                    children: [
                        '/abandon/JS.md',
                        '/abandon/CSS.md',
                        '/abandon/vue.md',
                        '/abandon/uniapp.md',
                        '/abandon/TS.md',
                        '/abandon/nuxt.md',
                        '/abandon/lodash.md',
                        '/abandon/react.md',
                        '/abandon/angular.md',
                        '/abandon/babylon.md',
                        '/abandon/three.md',
                        '/abandon/eslint.md',
                        '/abandon/mqtt.md',
                        '/abandon/rule.md',
                        '/abandon/linr.md',
                        '/abandon/java.md',
                        '/abandon/arduino.md',
                        '/abandon/other.md'
                    ]
                }
            ]
        }
    },
    plugins: [
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ],
    dest: 'public'
}