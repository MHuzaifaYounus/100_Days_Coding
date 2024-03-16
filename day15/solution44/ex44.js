// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich_items(item) {
    console.log("The sandwitch includes : ".concat(item));
}
sandwich_items(["cheeze", "Mashrooms", "garlic sauce"]);
sandwich_items(["Eggs", "Ketchup"]);
sandwich_items(["mayonese", "HotSauce", "chiken", "peprinos"]);
