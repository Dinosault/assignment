// 在專案中引入套件
const express = require('express');
const moment = require('moment');
// 建立一個 Express 應用程式
const app = express();
const currentTime = moment();
const today = currentTime.format('YYYY-MM-DD'); //獲取並格式化現在的時間
const tendays = currentTime.add(10,'days').format('YYYY-MM-DD');
// 設定路由和處理程式
// app.get()當成傳一次
app.get('/', (req, res) => {
    res.send(`今天日期：${today} <br>十天後日期：${tendays}`);
});
// 啟動伺服器
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});