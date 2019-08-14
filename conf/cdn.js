/**
 * OSS上传
 */
const co = require('co');
const fs = require('fs');
const path = require('path');

/**
 * 根文件路径
 */
const PATH_DIST = path.join(__dirname, '../dist');

/**
 * 获取当前文件夹下的所有js和css文件
 * @param {string} filePath 文件夹路径
 * @returns {object} 返回当前目录下的js和css文件
 */
function getEntry(filePath) {
  let dirs = fs.readdirSync(filePath);
  let matchs = [];
  let files = {};
  dirs.forEach(function (item) {
    matchs = new RegExp(/(.+)\.js|(.+)\.css/).test(item);
    if (matchs) {
      files[item] = filePath;
    }
  });
  return files;
}

/**
 * 上传文件
 */
co(function *(){
  return yield getEntry(PATH_DIST);
}).then((res)=>{
  // 拿到批量的文件路径后，执行上传代码
  console.log(res);
});
