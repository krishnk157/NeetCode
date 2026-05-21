function heapSort(arr) {
  let n = arr.length;

  // Create a max heap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDown(i, arr, n);
  }

  // sort the array
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(0, arr, i);
  }
  return arr;
}

// heapifyDown
function heapifyDown(i, arr, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(largest, arr, n);
  }
}

console.log(heapSort([98, 45, 1, 2, 6, 88]));
