import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Serein Docs",
  description: "",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs', items: [
          {
            text: 'Docker',
            link: '/docker/DockerFile'
          }
        ]
      }
    ],

    sidebar: {
      '/docker': [
        {
          text: 'Docker',
          items: [
            { text: 'DockerFile', link: '/docker/DockerFile' },
            { text: 'DockerRegistry', link: '/docker/DockerRegistry' },
            { text: 'Elasticsearch', link: '/docker/Elasticsearch' },
            { text: 'Kibana', link: '/docker/Kibana' },
            { text: 'Minio', link: '/docker/Minio' },
            { text: 'MySql5.7', link: '/docker/MySql5.7' },
            { text: 'nacos2.1.1', link: '/docker/nacos2.1.1' },
            { text: 'NginxAndVue', link: '/docker/NginxAndVue' },
            { text: 'Redis', link: '/docker/Redis' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Serein-sz' }
    ],

    search: {
      provider: 'local'
    }
  }
})
