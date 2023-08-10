class Google {
    constructor(opt) {
        this.init()
    }
    init() {
        console.log('Google test')
    }
}

// 代理函数仅作管控单例
const ProxyCreateSingleton = (function(){
    let instance;
    return function(opt) {
        if (instance) {
            return instance;
        }
        return instance = new Google(opt);
    }
})();

export default ProxyCreateSingleton


