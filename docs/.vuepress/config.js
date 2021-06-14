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
            { text: '待学习笔记', link: '//othernote'},
            { text: '其他', link: '/other/' }
        ],
        sidebar: {
            '/base/':['',{
                title: '学习笔记',
                collapsable: false,
                children: [
                    '/base/test/JavaScript.md',
                    '/base/test/CSS.md'
                ]
            }],
            '/othernote/': ['', {
                title: '其他学习笔记',
                collapsable: false,
                children: [
                    '/othernote/安全.md',
                    '/othernote/框架.md',
                    '/othernote/浏览器.md',
                    '/othernote/时间.md',
                    '/othernote/数据结构.md',
                    '/othernote/算法.md',
                    '/othernote/网络相关.md',
                    '/othernote/网络协议.md',
                    '/othernote/JavaScript.md',
                    '/othernote/JSmethod.md',
                    '/othernote/line.md',
                    '/othernote/react.md',
                    '/othernote/sort.md',
                    '/othernote/vue.md'
                ]
            }],
            '/other/': ['']
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