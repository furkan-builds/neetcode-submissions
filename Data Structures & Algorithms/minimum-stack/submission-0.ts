class MinStack {
    private stack: number[];
    private minimumStack: number[];

    constructor() {
        this.stack = [];
        this.minimumStack = [];
    }

    push(value: number): void {
        this.stack.push(value);

        if (this.minimumStack.length === 0 || this.minimumStack[this.minimumStack.length - 1] >= value) {
            this.minimumStack.push(value);
        }
    }

    pop(): void {
        if (this.stack.pop() === this.minimumStack[this.minimumStack.length - 1]) {
            this.minimumStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minimumStack[this.minimumStack.length - 1]
    }
}
