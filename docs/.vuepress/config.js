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
                    '/test/othernote/安全.md',
                    '/test/othernote/框架.md',
                    '/test/othernote/浏览器.md',
                    '/test/othernote/时间.md',
                    '/test/othernote/数据结构.md',
                    '/test/othernote/算法.md',
                    '/test/othernote/网络相关.md',
                    '/test/othernote/网络协议.md',
                    '/test/othernote/JavaScript.md',
                    '/test/othernote/JSmethod.md',
                    '/test/othernote/line.md',
                    '/test/othernote/react.md',
                    '/test/othernote/sort.md',
                    '/test/othernote/vue.md'
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