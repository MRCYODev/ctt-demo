import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CTT",
  description: "Welcome to the Computer Technician Tools repository! This collection of tools is designed to assist computer technicians in diagnosing, repairing, and optimizing computers. Whether you're a seasoned professional or just starting out, you'll find valuable utilities here to streamline your workflow and improve efficiency.",
  base: '/ctt-demo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Welcome', link: '/src/welcome',
        items: [
          { text: 'Example 1', link: '/src/markdown-examples' },
          { text: 'Example 2', link: '/src/api-examples' },
          { text: 'OS', link: '/src/os' },
          { text: 'Windows', link: '/src/windows' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MRCYODev/Computer-Technician-Tools' }
    ]
  }
})
