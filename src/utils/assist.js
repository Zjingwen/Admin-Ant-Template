export function jsonToQuery(str) {
  let _str = '';

  for (let o in str) {
    if (str[o] !== -1) {
      _str += o + '=' + str[o] + '&';
    }
  }
  _str = _str.substring(0, _str.length-1);
  return _str;
};

/**
 * 获取localStorage并且换转object
 * @param {string} item localStorage 的名称
 * @returns {object || false } 存在返回值存在返回false;
 */
export function storageGet(item){
  if(localStorage.getItem(item)){
    return JSON.parse(localStorage.getItem(item));
  }
  return false;
};

/**
 * 删除localStorage
 * @param {string} item localStorage 的名称
 * @returns {boolean} 成功返回true，失败返回false
 */
export function storageRemove(item){
  if(localStorage.getItem(item)){
    localStorage.removeItem(item);
    return true;
  }
  return false;
}

/**
 * query转json
 * @param {string} str query参数
 */
export function queryToJson(str){
  if(str === '') return {};
  return str.split('?')[1].split('&').reduce(function(prev, curr, i, arr) {
    let p = curr.split('=');
    prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
    return prev;
  }, {});
};

/**
 * 检查参数是否缺失
 * @param {array} left 必备参数
 * @param {object} right 传入的参数
 * @returns {array} 返回缺失的参数，为空表示不缺失
 */
export function checkQuery(left, right){
  return left.filter((v)=> !right.hasOwnProperty(v));
};
