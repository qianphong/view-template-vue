const Fontmin = require('fontmin')
const words = ''

const fontmin = new Fontmin()
  .src('src/assets/fonts/source/*.ttf')
  .use(
    Fontmin.glyph({
      text: words,
      hinting: false, // keep ttf hint info (fpgm, prep, cvt). default = true
    }),
  )
  .dest('src/assets/fonts')

fontmin.run((err, files) => {
  if (err) throw err

  console.log(files[0])
  // => { contents: <Buffer 00 01 00 ...> }
})
