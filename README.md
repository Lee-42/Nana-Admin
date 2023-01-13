# nana-naive

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 实现统一文件引入与方便代码书写

1. vue 开发, 习惯性会使用路径别名, 但是在不配置的情况下, 敲下@并不会进行路径补全, 也不会跳转
   - 解决方法, vscode 插件搜索`Path Intellisense`
   - 在 settings.json 中配置：
     "path-intellisense.mappings": {
     "@": "${workspaceRoot}/src"
     }

### 思考: 系统的第一个交易是什么,

1. 肯定是获取 token, 但是需要将登录用户的信息也一起返回吗?

### 无需登录也可以开发静态页面

1. 使用 mock 数据

### 使用 npm install fingerprintjs 生成浏览器指纹加密 token
