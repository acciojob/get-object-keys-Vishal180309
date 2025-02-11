// Create the student object
const student = {
    name: "John",
    age: 25,
    city: "New York",
};

// Function to get all keys from the object
function getKeys(obj) {
    return Object.keys(obj);
}

// Testing the function
document.getElementById("get-keys-button").addEventListener("click", function () {
    const keys = getKeys(student);
    document.getElementById("result").innerText = `Keys: ${keys}`;
});

// Test 1: Multiple properties
const student2 = {
    name: "Jane",
    age: 30,
    city: "Los Angeles",
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

// Test 2: Single property
const student3 = {
    name: "Bob",
};
console.log(getKeys(student3)); // Output: ["name"]