/* 
* Stack with objects
 */

class Stack {
  constructor(){
    this.stack = {};
    this.count = 0;
  }

  push(ele){
    this.stack[this.count] = ele;
    this.count++;
    return this.stack;
  }

  peek(){
    return this.stack[this.count - 1]
  }

  size(){
    return this.count;
  }

  print(){
    console.log(this.stack);
  }

  pop(){
    this.count--;
    const ele = this.stack[this.count];
    delete this.stack[this.counnt];
    return ele;
  }
};

const stack = new Stack();
console.log(stack.size());
console.log(stack.push('VInce Vaugh'));
console.log(stack.push('Jennifer Anniston'));
console.log(stack.push('Steve Carrell'));
console.log(stack.peek());
console.log(stack.push('Ben Stiller'));
console.log(stack.peek());
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
console.log(stack.peek());
console.log(stack.size);

