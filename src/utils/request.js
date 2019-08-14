import axios from 'axios';

export default (url, data, type)=>{
  axios.defaults.withCredentials = true;
  axios.defaults.crossDomain = true;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  var instance = axios.create({});
  if(userInfo){
    instance.defaults.headers.common["sign"] = userInfo.sign;
  }

  if(type){
    return axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      url: url,
      data: data.params,
    });
  }else{
    return axios(url, data);  
  }
};