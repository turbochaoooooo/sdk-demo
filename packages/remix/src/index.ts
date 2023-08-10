
class Remix {
    constructor(opt) {
        this.init()
    }
    init () {
    }
    test() {
        console.log('fb test')
    }
}

// 代理函数仅作管控单例
const ProxyCreateSingleton = (function(){
    let instance;
    return function(opt) {
        if (instance) {
            return instance;
        }
        return instance = new Remix(opt);
    }
})();

export default ProxyCreateSingleton


