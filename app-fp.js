// Minam의 기능을 함수로 구현
function sayHelloMinam() {
  return "hello kongukjae";
}

// Chunam의 기능을 팩토리 함수로 구현
function createChunam() {
  // 리턴이 객체이다.
  return {
    sayHello: function() {
      return "bye kongukjae";
    }
  }
}