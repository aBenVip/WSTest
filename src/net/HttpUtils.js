/**
 * Author: aBen
 * Date: 2018/1/11
 * Time: 17:26
 */

/**
 * React-Native Fatch网络请求工具类
 * Songlcy create
 * params:请求参数
 * ES6 Promise 使用
 * resolve 成功时候返回
 * reject 失败时候返回
 */

export default class HttpUtils {
    //基于 fetch 封装的 GET请求
    static getFatch(url) {
        return new Promise((resolve, reject) => {
                fetch(url)
                    .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                reject({status: response.status})
                            }
                        }
                    )
                    .then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            }
        )
    }

//基于 fetch 封装的 POST请求
    static postFatch(url, params) {

        return new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'POST',
                    header: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(params)
                })
                    .then((response) => {

                            if (response.ok) {

                                return response.json();
                            } else {

                                reject({status: response.status})
                            }
                        }
                    )
                    .then((response) => {
                        //成功返回
                        resolve(response)
                    })
                    .catch((error) => {
                        //失败返回
                        reject(error)
                    })
            }
        )
    }
}