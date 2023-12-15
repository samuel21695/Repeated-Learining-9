var Minam = /** @class */ (function () {
    function Minam() {
    }
    Minam.sayHello = function () {
        return "hello kongukjae";
    };
    return Minam;
}());
var Chunam = /** @class */ (function () {
    function Chunam() {
    }
    Chunam.prototype.sayHello = function () {
        return "bye kongukjae";
    };
    return Chunam;
}());
// Minam 클리스의 static 메서드 사용 예시
console.log(Minam.sayHello()); // hello kongukjae
// Chunam 클래스의 인스턴스 생성 및 메서드 사용 예시
var chunamInstance = new Chunam();
console.log(chunamInstance.sayHello()); // bye kongukjae
