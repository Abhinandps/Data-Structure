class CircularNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const node = new CircularNode(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;

            node.next = node;
        } else {
            node.next = this.head;
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    print() {
        if (!this.head) return;

        const result = [];
        let current = this.head;

        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }

    contains(value) {
        if (!this.head) return false;

        let current = this.head;

        do {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        } while (current !== this.head);

        return false;
    }
}
