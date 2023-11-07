let obj = {
    "name": "サトウ",
    "age": 32
}

console.log(add(5, 10));
hello();

rename(obj);
console.log(obj["name"]);


// 以下 関数定義
function add(a, b) {
    return a + b;
}

function hello() {
    console.log("こんにちは" + obj["name"]);
}

function rename(object) {
    object["name"] += "さん"
}
