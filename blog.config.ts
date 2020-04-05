/*
 * @Author: ndzy
 * @Date: 2020-04-05 07:11:13
 * @LastEditTime: 2020-04-05 14:13:47
 * @LastEditors: ndzy
 */
import { IBlogConfig } from '@/types'

const config: IBlogConfig = {
  host: '0.0.0.0',
  port: 9000,
  enableHTTPS: false,
  mongoUrl: 'mongodb://root:root@localhost:28888/blog?authSource=admin',
  jwtSecret: 'myblogjsonwebtokensecretkey',
}

export default config;

