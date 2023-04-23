module.exports = {
  env: {
    browser: false,
    es2020: true
  },
  // 继承自一些已经设置好的配置
  extends: [
    'standard'
  ],
  // 例如ts就需要配置语法解析器来解析特有的语法
  // parser: "",
  // 语法解析器的相关配置（只是检测语法，对于该语法是否可用，那是env需要做的事情）
  parserOptions: {
    ecmaVersion: 12
  },
  // 每个校验规则的开启或者关闭
  rules: {
    'no-undef': 'off'
  },
  // 列出可用的全局对象，不做检测。
  globals: {
    jQuery: 'readonly'
  }
}
