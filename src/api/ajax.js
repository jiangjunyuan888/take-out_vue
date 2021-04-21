/*
* 封装
* ajax 请求函数模块
* 返回值： promise 对象(异步返回的数据是： response.data)
* */

import axios from 'axios'

export default function ajax(url,data={},type='GET'){
  return new Promise(function(resolve,reject) {
    //  执行异步操作
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&"
      })
      if (dataStr !== '') {
        //substring()用于提取字符串中介于两个指定下标之间的字符
        dataStr = dataStr.substring(0, dataStr.lastIndex("&"))
        url = url + "?" + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      //  发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      //  成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject
      reject(error)
    })
  })
}

/*
* 正常情况为：
* const response = await ajax()
* const result = response.data
*
* 现在要实现：
* const result = await ajax()
* */