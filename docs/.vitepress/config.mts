import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "喵云MC",
  description: "喵云MC，稳定，流畅，专业",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始吧',
        items: [
          { text: '登录服务器', link: '/docs/first' },
          { text: '岛屿挑战', link: '/docs/isc' },
          { text: '岛屿团队', link: '/docs/ist' },
          { text: '岛屿设置', link: '/docs/iss' },
          { text: '传送/地标', link: '/docs/tp' },
          { text: '玩家商店', link: '/docs/shop' },
          { text: '附魔', link: '/docs/fumo' },
          { text: '常见问题', link: '/docs/fqa' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yukino12333/mydoc' }
    ]
  }
})
