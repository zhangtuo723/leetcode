// js 实现大顶堆

class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    heapifyUp(index) {
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
  
        if (this.heap[parentIndex] < this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let largest = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
  
      if (largest !== index) {
        this.swap(index, largest);
        this.heapifyDown(largest);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
  
      return max;
    }
  
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  
    size() {
      return this.heap.length;
    }
  }
  
  // 示例用法
  

  

  


  var minStoneSum = function(piles, k) {

    const maxHeap = new MaxHeap();

    piles.forEach(v=>{
        maxHeap.insert(v)
    })

    for(let i=0;i<k;i++){
       let s =  maxHeap.extractMax()
       b = s>>1
       s-=b
       maxHeap.insert(s)
    }

    return maxHeap.heap.reduce((sum,curr)=>sum+=curr,0)


  };

  console.log(minStoneSum([5,4,9],2));

  