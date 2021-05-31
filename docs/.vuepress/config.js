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
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        },
        nav: [
            { text: '主页', link: '/' },
            { text: '笔记', link: '/note/'},
            { text: '框架', link: '/framework/'},
            { text: '基础', link: '/base/'},
            { text: '软件', link: '/note2/'},
            { text: '指导', link: '/line/' }
        ],
        sidebar: {
            '/note/': ['',
            {
                title: '前端学习笔记',
                collapsable: false,
                children: [
                    '/note/code/sort.md',
                    '/note/code/JavaScript.md',
                    '/note/code/ES6.md',
                    '/note/code/Typescript.md',
                    '/note/code/Vue.md',
                    '/note/code/Nuxt.md',
                    '/note/code/React.md',
                    '/note/code/CSS.md'
                ]
            },{
                title: '后端学习笔记',
                collapsable: false,
                children: [
                    '/note/java/java.md'
                ]
            },{
                title: '硬件学习笔记',
                collapsable: false,
                children: [
                    '/note/arduino/Arduino.md'
                ]
            }],
            '/framework/':['',{
                title: '前端框架',
                collapsable: false,
                children: [
                    '/framework/test/Nuxt.md',
                    '/framework/test/React.md',
                    '/framework/test/Typescript.md',
                    '/framework/test/Vue.md'
                ]
            }],
            '/base/':['',{
                title: '前端基础',
                collapsable: false,
                children: [
                    '/base/test/CSS.md',
                    '/base/test/JavaScript.md',
                    '/base/test/ES6.md'
                ]
            }],
            '/note2/':[''],
            '/line/': ['']
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