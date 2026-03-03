module.exports = {
  content: ['./app/**/*.{js,jsx}','./components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:     '#0d1117',
        bg2:    '#161b22',
        bg3:    '#1f2937',
        green:  '#3fb950',
        amber:  '#d47c0f',
        muted:  '#8b949e',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}