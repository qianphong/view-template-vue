const Fontmin = require('fontmin')
const words =
  '荣誉奖项全国重点镇、全国特色小镇、国家卫生镇、全国环境优美镇、中国休闲服装名镇、全国小城镇建设示范镇、中国人居环境范例奖、全国发展改革试点小城镇、中国苏作红木家具名镇'

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
