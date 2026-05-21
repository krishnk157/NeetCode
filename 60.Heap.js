function createMinHeap(initial = []) {
  let heap = [...initial];

  function getLeftChild(i) {
    return 2 * i + 1;
  }

  function getRightChild(i) {
    return 2 * i + 2;
  }

  function getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  function heapifyDown(i) {
    let smallest = i;
    let left = getLeftChild(i);
    let right = getRightChild(i);
    let n = heap.length;

    if (left < n && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < n && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
      heapifyDown(smallest);
    }
  }

  function heapifyUp(i) {
    while (i >= 0) {
      let parent = getParent(i);
      if (heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  function insert(val) {
    heap.push(val);
    heapifyUp(heap.length - 1);
  }

  function peek() {
    return heap.length ? heap[0] : null;
  }

  function extract() {
    if (heap.length === 0) return null;
    let min = heap[0];
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    heapifyDown(0);
    return min;
  }

  function buildHeap() {
    let start = Math.floor(heap.length / 2) - 1;
    for (let i = start; i >= 0; i--) {
      heapifyDown(i);
    }
  }
  buildHeap();
  return {
    insert,
    extract,
    peek,
    getHeap: () => heap,
  };
}

const h1 = createMinHeap([5, 3, 1, 2, 6]);

console.log(h1.getHeap());
h1.insert(-1);
console.log(h1.peek());
console.log(h1.getHeap());
console.log(h1.extract());
console.log(h1.getHeap());
