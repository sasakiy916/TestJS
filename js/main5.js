let obj = {
    "name": "satou",
    "age": 32
};

for (const key in obj) {
    console.log("キー：" + key);
    console.log("値：" + obj[key]);
}