let keyAccessible = false;

document.getElementById("access-key").addEventListener("click", () => {
    let age = parseInt(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (age < 18) {
        result.innerText = "Sorry, you are underaged";
        keyAccessible = false;
        document.getElementById("start-car").disabled = true;
    } else if (age == 18) {
        result.innerText = "Welcome to your first ride, do well to make use of your ride";
        keyAccessible = true;
        document.getElementById("start-car").disabled = false;
    } else {
        result.innerText = "Fire on";
        keyAccessible = true;
        document.getElementById("start-car").disabled = false;
    }
});

document.getElementById("start-car").addEventListener("click", () => {
    let result = document.getElementById("result");
    if (keyAccessible) {
        result.innerText = "Car started. Enjoy your ride!";
    } else {
        result.innerText = "Access denied. You need to access the key first.";
    }
});