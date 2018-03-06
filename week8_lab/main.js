function penguin(name, age) {
    this.name = name;
    this.age = age;
    this.type = "penguin"
    this.image = "penguin.jpg"
}

function owl(name, age) {
    this.name = name;
    this.age = age;
    this.type = "owl"
    this.image = "owl.jpg"
}

function kiwi(name, age) {
    this.name = name;
    this.age = age;
    this.type = "kiwi"
    this.image = "kiwi.jpg"
}

var animals = [new penguin(), new owl(), new kiwi()];
var animalnames = ["kevin", "jimmy", "billy", "timothy", "randy", "pop"]

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var maxIndex = animalnames.length;
    var randomIndex = generateRandomIndex(animalnames.length);
    console.log(animalnames[randomIndex]);
    return animalnames[randomIndex];
}

function generateRandomAge() {
    var age = generateRandomIndex(200);
    return age;
}

function generateRandomAnimal() {
    var index = generateRandomIndex(animals.length);
    var animal = animals[index];
    if (animal instanceof kiwi) {
        return new kiwi(generateRandomName(), generateRandomAge());
    } else if (animal instanceof owl) {
        return new owl(generateRandomName(), generateRandomAge());
    } else {
        return new penguin(generateRandomName(), generateRandomAge());
    }
}

$(document).ready(function() {
    localStorage.
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
    var flag = false;
    if (animal === null) {
        var animal = generateRandomAnimal();
        $("#save").show();
        $("#save").text("Save Animal");
        flag = true;
    } else {
        $("#save").show();
        $("#save").text("Clear Animal");
        flag = false;
    }
    $("#image").attr("src", animal.image);
    $("#name").text(animal.name);
    $("#age").text(animal.age);
    $("#save").click(function() {
    if (flag === false) {
        localStorage.removeItem("savedAnimal");
        $("#save").hide();
        $("#message").text("Cleared!");
    } else {
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
        $("#save").hide();
        $("#message").text("Saved!");
        }
    });
});









