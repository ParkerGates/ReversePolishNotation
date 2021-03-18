class Stack {
    constructor(){
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    pop() {
        return this.storage.pop();
    }

    size() {
        return this.storage.length;
    }
}