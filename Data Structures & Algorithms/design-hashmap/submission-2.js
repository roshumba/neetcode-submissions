class MyHashMap {

    constructor() {
        this.values = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] && this.values[i][0] === key) {
                this.values[i][1] = value;
                return;
            }
        }
        this.values.push([key, value]);
        return;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] && this.values[i][0] === key) {
                return this.values[i][1];
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] && this.values[i][0] === key) {
                this.values[i] = null;
                return;
            }
        }
        return; 
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
