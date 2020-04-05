/*
 * @Author: ndzy
 * @Date: 2020-04-05 14:10:41
 * @LastEditTime: 2020-04-05 14:12:40
 * @LastEditors: ndzy
 */
module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    semi: 'off',
    // '@typescript-eslint/semi': ['warn', 'never'], //分号
    'arrow-parens': ['warn', 'as-needed'],
    'no-console': 'off',
  },
}
