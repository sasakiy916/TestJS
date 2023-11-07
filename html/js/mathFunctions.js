// モジュール内で数学関数を定義
// 足し算
export function add(a, b) {
    return a + b;
}

// 引き算
export function subtract(a, b) {
    return a - b;
}

// 掛け算
export function multiply(a, b) {
    return a * b;
}

// 割り算
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
        return a / b;
}