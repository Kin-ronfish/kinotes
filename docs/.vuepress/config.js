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
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'kinron/blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '笔记', link: '/note/'},
            { text: '软件', link: '/note2/'},
            { text: '指导', link: '/line/' }
        ],
        sidebar: {
            '/views/': ['',
                {
                    title: 'GitHub 软技能',
                    collapsable: false,
                    children: [
                        '/views/github/follow.md',
                        '/views/github/star.md',
                    ]
                },
                {
                    title: 'JS 数据结构与算法之美',
                    collapsable: false,
                    children: [
                        '/views/algorithms/10algo.md',
                    ]
                },
                {
                    collapsable: false,
                    children: [
                        '/views/vue/vue-ts.md'
                    ]
                }
            ],
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