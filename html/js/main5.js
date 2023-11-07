let obj = {
    "name": "サトウ",
    "age": 32
};

for (const key in obj) {
    console.log("キー：" + key + ", 値：" + obj[key]);
}

delete obj["age"];
console.log(obj["age"]);

obj["height"] = 172.5;