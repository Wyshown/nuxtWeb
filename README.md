# nuxtWeb

> 韩武洽搭建测试项目

## Linux build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```


## Windows Build Setup

``` bash
# Windows服务器执行命令：
# 执行步骤如下：
# 1. 打开 cmd 进入到 C:\Source\Gitlab\nuxtWeb 文件下
cd C:\Source\Gitlab\nuxtWeb
# 2. 打包执行命令如下:
npm run build:win
# 3. pm2 执行命令如下:
pm2 start ./node_modules/nuxt/bin/nuxt.js
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
