import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "luna.cli",
  description: "The ultimate Discord bot template generator",
  themeConfig: {
    logo: 'https://cdn.discordapp.com/attachments/1363833793990885589/1365036916818444408/luna.png?ex=680bd932&is=680a87b2&hm=cc4c0f61cbe33f697057a5de99ea8c7f2055cd01e7d43c6bba8694ec7ae51524&',
    
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
