/**
 * 在控制台输出项目元信息
 */
function metaInfo() {
  // 构建目标环境
  tag('Environment', process.env.NODE_ENV, process.env.NODE_ENV === 'production' ? '#42C02E' : '#EC7839')
  // 大版本号 @ 最近提交的唯一标识符
  tag('Version', `${process.env.VERSION}@${process.env.SCV}`, '#1475B2')
  // 构建日期
  tag('Build Date', process.env.BUILD_DATE, '#1475B2')
}
// 立即执行
metaInfo()

/**
 * 在控制台打印徽标。
 * @param key - 徽标键名
 * @param value - 徽标值
 * @param color - 徽标值颜色
 */
function tag(key, value, color) {
  // eslint-disable-next-line no-console
  console.log(`%c ${key} %c ${value} `, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;', `padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ${color};`)
}
