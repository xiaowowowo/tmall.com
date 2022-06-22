'use strict';

const cookie = {
  // 获取cookie
  get(key){
    if(document.cookie){
      let cookies = document.cookie.split('; ');
      cookies = cookies.reduce((o,curr)=>{
        let [key,value] = curr.split('=');
        o[key] = value;
        return o;
      },{});

      return key in cookies ? cookies[key] : null;
    }
  },
  // 创建cookie
  set(key,value,expires,path='/'){
    if(Number.isInteger(expires)){
      let d = new Date();
      d.setDate(d.getDate()+expires);
      document.cookie = `${key}=${value};expires=${d};path=${path}`;
    }else{
      document.cookie = `${key}=${value};path=${path}`;
    }

    return this;
  },
  //  删除cookie
  remove(key,path='/'){
    this.set(key,'',-1,path);
    return this;
  }
};