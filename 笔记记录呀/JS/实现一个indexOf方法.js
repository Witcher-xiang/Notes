Array.prototype.myIndexOf = function(searchValue,fromIndex = 0){
    if(!searchValue || this.length == 0 || fromIndex > this.length) return -1;

    for(let i = fromIndex; i<this.length;i++){
        const item = this[fromIndex];
        if(item == searchValue) return i;
    }

    return -1;
}

