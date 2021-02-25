function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {
    this.insert = function (head, data) {
        let newNode = new Node(data);
        if (head === null) {
            head = newNode;
            return head;
        }
        let header = head;
        if (head.next === null) {
            head.next = newNode;
            return head;
        } else {
            let buffer = this.insert(head.next, data);
            header.next = buffer;
            return header;
        }
    };

    this.display = function (head) {
        var start = head;
        console.log(JSON.stringify(head, null, 2));
        while (start) {
            console.log(start.data + ' ');
            start = start.next;
        }
    };
}

const testBatch = [21, 12, 18, 2020, 3, 224];
function main() {
    var T = testBatch;
    var head = null;
    var mylist = new Solution();
    for(i = 0; i < T.length; i++){
        var data = T[i];
        head = mylist.insert(head, data);
    }
    mylist.display(head);
}

main();