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
            { text: '基础', link: '/base/'},
            { text: '框架插件', link: '/frapul/'},
            { text: '工具', link: '/front/'}
        ],
        sidebar: {
            '/base/':['',
                {
                    collapsable: false,
                    children: [
                        '/base/test/JavaScript.md',
                        '/base/test/CSS.md',
                        '/base/test/base.md',
                        '/base/test/rule.md'
                    ]
                }
            ],
            '/frapul/':['',
                {
                    collapsable: false,
                    children: [
                        '/frapul/test/frame.md',
                        '/frapul/test/plugins.md',
                        '/frapul/test/other.md'
                    ]
                }
            ],
            '/front/':['']
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