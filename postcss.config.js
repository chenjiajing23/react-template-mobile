module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '>1%']
    }),
    require('stylelint')({
      configFile: '.stylelintrc.json'
    }),
    // 移动端适配 (注意：行内样式不会转化)
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 375, // 视窗的宽度，对应移动端设计稿的宽度，一般是375
      // viewportHeight:667, // todo 视窗的高度，对应的是我们设计稿的高度，和 viewportWidth 二选一
      unitPrecision: 5, // 单位转换后保留的精度
      /**
       * @desc 能转化为vw的属性列表
       * 传入特定的CSS属性；
       * 可以传入通配符""去匹配所有属性，例如：['']；
       * 在属性的前或后添加"*",可以匹配特定的属性. (例如['position'] 会匹配 background-position-y)
       * 在特定属性前加 "!"，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换letter-spacing
       * "!" 和 ""可以组合使用， 例如: ['', '!font*']，将不转换font-size以及font-weight等属性
       */
      propList: [
        '*',
      ],
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: [/^multi-picker/], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      replace: true, // 是否直接更换属性值，而不添加备用属性
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 568, // 横屏时使用的视口宽度
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      /** 更多 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md */
    }),
  ],
}
