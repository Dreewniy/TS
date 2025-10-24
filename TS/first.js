// //tipi danix
const users = [
    { name: "Sargis", age: 18 },
    { name: "Max", age: 20 },
    { name: "Anna", age: 16 }
];
function getUserByName(name) {
    return new Promise((resolve, reject) => {
        let result = users.find(num => num.name === name);
        if (result) {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        }
        else {
            reject("User not found");
        }
    });
}
getUserByName("Sargis")
    .then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});
