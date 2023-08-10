class Login {
  constructor(opt) {
      this.init()
  }
  init () {
      // console.log(gl, 'fb test')
  }
  google() {
      console.log('google登录')
  }
  facebook() {
      console.log('facebook登录')
  }
  tiktok() {
      console.log('tiktok登录')
  }
  app() {
      console.log('唤醒客户端登录')
  }
}

// 代理函数仅作管控单例
const ProxyCreateSingleton = (function(){
  let instance;
  return function(opt) {
      if (instance) {
          return instance;
      }
      return instance = new Login(opt);
  }
})();

export default ProxyCreateSingleton


