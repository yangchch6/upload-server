# upload-server
文件上传服务，bee-upload 组件的测试用例

## 启动服务
```
npm run start
```
接口地址：http://localhost:8083/api/reg

## 前端调试
在 bee-upload 组件中，配置 action 参数为接口地址即可
```js
const props = {
  name: 'file',
  action: 'http://localhost:8083/api/reg',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    }
  },
};
```

## 文件上传
上传的文件会存储到 upload-server/public 目录下