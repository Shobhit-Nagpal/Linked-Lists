const Node = (value) => {
    const next = null;
    return {value, next};
};


const LinkedList = () => {
    let head = null;
    let size = 0;

    const append = (value) => {
        const newNode = Node(value);
        if (head === null) {
            head = newNode;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    const prepend = (value) => {
        const newNode = Node(value);

        if (head === null) {
            head = newNode;
        }
        else {
            newNode.next = head;
            head = newNode;
        }
        size++;
    }

    const pop = () => {

        let current = head;

        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
        size--;

    }

    const at = (index) => {

        if (index > size) {
            console.log("Index is invalid.");
            return -1;
        }

        let count = 0;
        let element = head;

        while (count < index) {
            element = element.next;
            count++;
        }

        return element;
    }

    const contains = (value) => {

        let current = head;

        while (current.next !== null) {
            if (current.value === value) {
                return true;
            }
            else {
                current = current.next;
            }
        }

        //Checks for last element
        if (current.value === value) {
            return true;
        }

        return false;

    }

    const find = (value) => {
        let index = 0;
        let current = head;

        while (current.next !== null) {
            if (current.value === value) {
                return index;
            }
            else {
                current = current.next;
                index++;
            }
        }

        //Checks for last element
        if (current.value === value) {
            return index;
        }

        return null;
    }

    const toString = () => {
        console.log("\n");
        console.log("The linked list looks like the following: ");

        let current = head;
        process.stdout.write("head --> ");
        while (current.next !== null) {
            process.stdout.write(`(${current.value}) --> `);
            current = current.next;
        }

        //Print last node
        process.stdout.write(`(${current.value}) --> null`);
        console.log("\n");
    }

    const getSize = () => {
        return size;
    }

    const getHead = () => {
        return head;
    }

    const getTail = () => {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    return {append, prepend, getSize, pop, at, contains, find, toString, getHead, getTail};
};


const linkedList = LinkedList();
linkedList.append(8);
linkedList.append(9);
linkedList.prepend(7);
linkedList.pop()
console.log(linkedList.getSize());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.at(1));
console.log(linkedList.contains(9));
console.log(linkedList.find(8));
linkedList.toString();