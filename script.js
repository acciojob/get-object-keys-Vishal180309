//your JS code here. If required.
const student = {
    name: "John Doe",
};

function getKeys(obj) {
    return Object.keys(obj);
}

document.getElementById("get-keys-button").addEventListener("click", function () {
    const keys = getKeys(student);
    document.getElementById("result").innerText = `Keys: ${keys}`;
});