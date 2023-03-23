
class Stack {
    constructor() {
        this.items = []
    }


    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        let stk = ''
        // reverse the stack for print only
        let newStack = this.items.reverse()
        newStack.forEach(v => stk += `${v}\n`)
        console.log(stk);

        // back to reverse normal form
        this.items = this.items.reverse()
    }
}




let stack = new Stack()
console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(25)
stack.push(30)

stack.print()
console.log(stack.pop());
stack.print()
console.log(stack.pop());
stack.print()
