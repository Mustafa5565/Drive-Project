const fs = require('fs')
const postcss = require('postcss')
const tailwindPostcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

async function build() {
  try {
    const input = fs.readFileSync('src/input.css', 'utf8')
    const result = await postcss([tailwindPostcss, autoprefixer]).process(input, {
      from: 'src/input.css',
      to: 'public/styles.css',
      map: false,
    })
    fs.writeFileSync('public/styles.css', result.css)
    console.log('Built public/styles.css')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
