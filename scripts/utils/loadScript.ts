
const WindowResources: any = {}

/**
 * @description 动态引入资源，用于单易引入不用编译的js/css 减少编译负担
 * @param {string} src 资源路径
 * @param {function} callback 回调函数，只适用于js
 * @param {boolean} noLoad 跳过加载直接执行回调
 */
const loadResources = (src: string, callback?: Function, noLoad?: boolean) => {
    if (WindowResources[src] || noLoad) {
        return callback && callback()
    }
    if (!src) {
        return console.log(new Error('please set the src of script/css'))
    }
    // load javascript
    if (/\.js(\?v=.*){0,1}$/.test(src)) {
        WindowResources[src] = false
        const script = document.createElement('script')
        script.src = src
        script.type = 'text/javascript'
        const headEle = document.getElementsByTagName('head')[0]
        // IE
        const IeScript = script as any
        if (IeScript.readyState) {
            IeScript.onreadystatechange = () => {
                if (IeScript.readyState === 'loaded' || IeScript.readyState === 'complete') {
                    WindowResources[src] = true
                    callback && callback()
                    IeScript.onreadystatechange = null
                }
            }
            // webkit opera
        } else {
            script.onload = () => {
                WindowResources[src] = true
                callback && callback()
            }
        }
        headEle.appendChild(script)
        // load stylesheet
    } else if (/\.css$/.test(src)) {
        const styleSheet = document.createElement('link')
        styleSheet.href = src
        styleSheet.rel = 'stylesheet'
        const headEle = document.getElementsByTagName('head')[0]
        headEle.appendChild(styleSheet)
        WindowResources[src] = true
    }
}

export default loadResources
