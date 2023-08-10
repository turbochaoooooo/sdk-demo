import loadResources from '../../../scripts/utils/loadScript'

class MTFB {
    constructor(opt) {
        this.init()
    }
    init () {
        // console.log(gl, 'fb test')
    }
}

// 代理函数仅作管控单例
const ProxyCreateSingleton = (function(){
    let instance;
    return function(opt) {
        if (instance) {
            return instance;
        }
        return instance = new MTFB(opt);
    }
})();

export default ProxyCreateSingleton


