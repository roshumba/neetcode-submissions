class MyHashSet {
    values: number[];
    length: number;

    constructor() {
        this.values = [];
        this.length = 0;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        this.values.push(key);
        this.length++;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        for (let i = 0; i < this.length; i++){
            if (this.values[i] === key){
                this.values[i] = null;
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
       for (let i = 0; i < this.length; i++){
            if (this.values[i] === key){
                return true;
            }
        } 
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
