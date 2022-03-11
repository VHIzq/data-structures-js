/* 
*las pilas o stacks son estructuras de datos lineal y unidireccional.
*Sigue una arquitectura  tipo LIFO (Last In, First Out) o el 
* ultimo elemento que entra es el primero en salir.  

Complejidad de espacio
Array: O(n).
Objeto: O(n).

Complejidad de tiempo
Para una implementación usando arrays:
Acceso: O(1)
Búsqueda: O(n)
Inserción: O(n)
Borrado: O(n)
Por otro lado, usando objetos:
Acceso: O(1)
Búsqueda: O(n)
Inserción: O(1)
Borrado: O(1)
*/


/* 
*Stack con arrays
*/

class Stack {
  constructor(){
    this.stack = [];
  }

  push(ele){
    this.stack.push(ele);
    return this.stack;
  }

  pop(){
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length - 1];
  }

  size(){
    return this.stack.length;
  }

  print(){
    console.log(this.stack);
  }
};

const actors = new Stack();
console.log(actors.size());
console.log(actors.push('Will Smith'));
console.log(actors.push('Matt Damon'));
console.log(actors.push('George Clooney'));
console.log(actors.size);
actors.print();
console.log(actors.peek());
console.log(actors.pop());
console.log(actors.peek());


