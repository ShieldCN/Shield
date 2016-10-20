//  判断是否登录
const isLogin = () => {
    return localStorage.loginname || "";
}


/**
 *检查是否支持webp格式图片
 */
const checkWebp = () => {
        try {
            return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
        } catch (err) {
            return false;
        }
    }
    /**
     *返回WebStorageCache实例
     */
// const WebStorageInstance = new WebStorageCache();
/**
 *检查是否已经已经缓存
 */
const checkWebStorage = (cacheName) => {
        cacheNameList = new WebStorageCache().get(cacheName);
        if (cacheNameList) {
            return true;
        }
        return false;
    }
    /**
     *检查是否缓存并返回promise
     */
const storageCachePromise = (cacheName) => {
    const promise = new Promise((resolve, reject) => {
        let cacheNameList = new WebStorageCache().get(cacheName);

        if (cacheNameList) {
            resolve(cacheNameList);
        } else {
            reject(null);
        }
    });
    return promise;
}

const setCachePromise = (cacheName, data) => {
    const promise = new Promise((resolve, reject) => {
        new WebStorageCache().set(cacheName, data);

        if (new WebStorageCache().set(cacheName, data)) {
            resolve('ok');
        } else {
            reject(null);
        }
    });
    return promise;
}



exports.isLogin = isLogin;
exports.checkWebp = checkWebp;
// exports.WebStorageInstance = WebStorageInstance;
exports.checkWebStorage = checkWebStorage;
exports.setCachePromise = setCachePromise;
exports.storageCachePromise = storageCachePromise;
