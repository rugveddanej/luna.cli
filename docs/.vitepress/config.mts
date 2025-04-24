import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "luna.cli",
  description: "The ultimate Discord bot template generator",
  themeConfig: {
    logo: '../../luna.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { text: 'Templates', link: '/templates' },
      { text: 'Discord', link: 'https://discord.gg/bdmxYHCrBF' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' },
      { icon: 'discord', link: 'https://discord.gg/bdmxYHCrBF' },
      { icon: 'twitter', link: 'https://twitter.com/your-handle' }
    ],

    search: {
      provider: 'local',
      options: {
        placeholder: 'Search luna.cli docs...'
      }
    }
  }
})
