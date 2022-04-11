// 146. LRU 缓存

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity=capacity;
    this.store = new Map();

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    const isExist = this.store.has(key);
    if(isExist){
    const val = this.store.get(key);
    this.store.delete(key);
    this.store.set(key,val);
    return  val;
    }
 
    
    return  -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.store.has(key)){
        this.store.delete(key);
    }
    this.store.set(key,value)
    if(this.store.size > this.capacity){
        var delKey = this.store.keys().next().value;
         this.store.delete(delKey);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */