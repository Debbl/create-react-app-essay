SPA 页面会导致直接访问路由会出现无法访问的错误，
因为 SPA 是前端路由，没有实际的资源，直接访问会出错，
可以通过 Link 标签去访问。

build 打包后 直接访问 /about 页面无法访问（没有实际的资源文件）

dev 模式下，在 webpack 的 devServer.historyApiFallback: true 可以在开发模式下
直接访问，一些路由。