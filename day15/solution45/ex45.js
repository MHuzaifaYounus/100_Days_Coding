// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function cars_inf(manufacturerno, modelno, color, optional_feature) {
    if (color === void 0) { color = ""; }
    if (optional_feature === void 0) { optional_feature = ""; }
    var information = {
        "Manufacturer No": manufacturerno,
        "Model No": modelno,
    };
    if (color.length > 0) {
        information["Color"] = color;
    }
    else {
    }
    if (optional_feature.length > 0) {
        information["Optional Feature"] = optional_feature;
    }
    else {
    }
    return information;
}
console.log(cars_inf(90, 2005));
console.log(cars_inf(90, 2005, "red", "Heat Absorbing chairs"));
