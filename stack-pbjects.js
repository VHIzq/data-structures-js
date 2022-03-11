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
    return elemen;
  }
};