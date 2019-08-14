# 提示
* 目前menu只支持两级

# 配置
需要切换请求路径，请直接修改path即可，path不会在正式环境生效。

```
// package.json 

"conf_liberty":{
  "root": "/admin", // 设置根目录
  "path": "mock", // 设置请求变量
  "url": {
    "mock": "http://localhost:8000/", // mock 数据接口
    "development": "http://localhost:8000/", // 开发环境接口
    "production": "http://localhost:8000/" // 正式环境接口
  }
}
```

# 规则
### page
* 所有一级页面都要用文件夹Page作为结尾
* 所有二级页面可以省略Page

## component
* 公共组件用根标题命名，例如：`Title`
* 页面组件用xxxxChild命名，例如：`TitleChild`

## router
```
export default{
  // 根路径，如果为String表示唯一，为Array表示多个
  path: String | Array [String,String],
  // react component 方法
  component: React Component,
  // menu显示的名称
  breadcrumbName: String,
  // icon 类型
  iconType: String,
  // 是否在menu显示，默认值true
  menu: Boolean,
  // 链接参数默认值
  query: Object,
  // 子路径
  next:[
    {
      // 子路径，如果为String表示唯一，为Array表示多个
      path: String | Array [String,String],
      // react component 方法
      component: React Component,
      // menu显示的名称
      breadcrumbName: String,
      // icon 类型
      iconType: String,
      // 是否在menu显示
      menu: Boolean,
      // 链接参数默认值
      query: Object,
    },
    ....
  ]
}
```