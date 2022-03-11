/* 
*Las colas o queues son estructuras de datos tambien lineales y unidireccionales.
*A diferencia de las pilas no siguen una arquitectura LIFO, 
*Sino FIFO (Fist In, First Out), los primeros que entran son los primeros que salen
*/

class Queue {
  constructor(){
    this.queue = [];
  }

  enqueue(ele){
    this.queue.push(ele);
    return this.queue;
  }

  dequeue(){
    return this.queue.shift();
  }

  peek(){
    return this.queue[0];
  }

  size(){
    return this.queue.length;
  }

  isEmpty(){
    return this.queue.length === 0;
  }

  print(){
    return this.queue;
  }
};

const queue = new Queue();
console.log(queue.enqueue('Matt Damon'));
console.log(queue.enqueue('Jason Statahl'));
console.log(queue.enqueue('Salma Hayek'));
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.print());
