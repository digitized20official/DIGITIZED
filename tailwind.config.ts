import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#2d1b69',
        'navy-light': '#3d2b7f',
        'whatsapp-green': '#25d366',
      },
    },
  },
  plugins: [],
};

export default config;
