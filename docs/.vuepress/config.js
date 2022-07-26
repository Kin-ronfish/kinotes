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
            { text: '前端', link: '/front/' }
        ],
        sidebar: {
            '/front/':[
                {
                    title: '语法基础',
                    collapsable: false,
                    children: [
                        '/front/base/JS.md',
                        '/front/base/node.md',
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
                        '/front/frame/uniapp.md',
                        '/front/frame/hint.md'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        '/front/other/rule.md',
                        '/front/other/method.md',
                        '/front/note/note.md',
                        '/front/note/question.md'
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