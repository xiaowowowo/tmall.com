'use strict';

const cookie = {
  // 获取cookie 的值value
  get(key) {
    if (document.cookie) {
      let cookies = document.cookie.split(';');
      cookies = cookies.reduce((obj, curr) => {
        let [key, value] = curr.split('=');
        obj[key] = value;
        return obj;
      }, {});
      return key in cookies ? cookies[key] : null;
    }
  },
  // 创建数据
  set(key, value, expires, path = '/') {
    if (Number.isInteger(expires)) {
      let d = new Date();
      d.setDate(d.getDate() + expires);
      document.cookie = `${key} = ${value};expires = ${d};path=${path}`;
    } else {
      document.cookie = `${key} = ${value};path = ${path}`;
    }
    return this;
  },

  remove(key, path = '/') {
    this.set(key, '', -1, path);
    return this;
  }
}