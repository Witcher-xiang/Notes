//49. 字母异位词分组

/*
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

const test = ["eat", "tea", "tan", "ate", "nat", "bat"];
const fun = (str) => {
    const map = new Map();
    for (const item of str) {

        const key = Array.from(item).sort().join('');
        map.has(key) ? map.get(key).push(item) : map.set(key, [item]);
    }

    return Array.from(map.values()) 
}

// fun(test)
console.log(fun(test));

