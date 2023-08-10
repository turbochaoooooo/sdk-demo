class Share {
    constructor(opt) {
        this.init()
    }
    init () {
        // console.log(gl, 'fb test')
    }
    twitter() {
        console.log('twitter分享')
    }
    facebook() {
        console.log('facebook分享')
    }
    tiktok() {
        console.log('tiktok分享')
    }
    app() {
        console.log('客户端分享')
    }
}

// 代理函数仅作管控单例
const ProxyCreateSingleton = (function(){
    let instance;
    return function(opt) {
        if (instance) {
            return instance;
        }
        return instance = new Share(opt);
    }
})();

export default ProxyCreateSingleton


