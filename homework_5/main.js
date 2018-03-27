var rolls = [];

var numInCart = 0;

function roll(name, picture, glaze, quantity, price) {
    this.name = name;
    this.pic = picture;
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
}

function getName() {
    return $("#name").html();
}

function getPicture(id) {
    return "hello";
}

function getGlaze() {
    return $("#selectglaze option:selected").val();
}

function getQuantity () {
    return $("#selectquantity option:selected").val();
//Get what the selected price is
}

function changePrice() {//Change the inner HTML of the price based on quantity
    var price = getQuantity();
    if (price == "1") {
        $("#price").html("$1.99");
    }
    else if (price == "3") {
        $("#price").html("$4.99");
    }
    else if (price == "6") {
        $("#price").html("$8.99");
    }
    else {
        $("#price").html("$10.99");
    }
}

function changeName() {//Change the name of the product depending on glaze
    var glaze = getGlaze();
    if (glaze == "none") {
        $("#name").html("Caramel Pecan");
    } else if (glaze == "sugar-milk") {
        $("#name").html("Caramel Pecan with Sugar Milk Glaze");
    } else if (glaze == "vanilla-milk") {
        $("#name").html("Caramel Pecan with Vanilla Milk Glaze");
    } else if (glaze == "double-chocolate") {
        $("#name").html("Caramel Pecan with Double Chocolate Glaze");
    }
}

function changeImg() {
    var glaze = getGlaze();
    if (glaze == "none") {
        $("#caramelpic").attr("src", "Assets/blackberry.jpg");
    } else if (glaze == "sugar-milk") {
        $("#caramelpic").attr("src", "Assets/original.jpg");
    } else if (glaze == "vanilla-milk") {
        $("#caramelpic").attr("src", "Assets/walnut.jpg");
    } else if (glaze == "double-chocolate") {
        $("#caramelpic").attr("src", "Assets/pumpkin.jpg");
    }
}

function getPrice () {
    return $("#price").html();
}

function addRolltoCart() {
    var price = getPrice();
    var name = getName();
    var picture = getPicture();
    var glaze = getGlaze();
    var quantity = getQuantity();
    // var rolls = localStorage.getItem("rolls");
    // if (rolls === null) {
    //     rolls = [];
    //     rolls.push(addedRoll);
    //     localStorage.setItem("rolls", JSON.stringify(rolls));
    // }

    // // CREATE THE ROLL VAR HERE. CHECK IF IT EXISTS, IF NOT, CREATE, IF SO, ADD
    // // numInCart = numInCart + 1;
    var addedRoll = new roll(name, picture, glaze, quantity, price);
    rolls.push(addedRoll);
    localStorage.setItem("rolls", JSON.stringify(rolls)); //Add rolls to storage
    console.log(rolls);
}

function updateCartNumber() { //Updates the css cart number
    var numRolls = JSON.parse(localStorage.getItem("rolls"));
    if (numRolls === null) {
        $("#cartnumber").html("0");
    } else if (numRolls.length === 0) {
        $("#cartnumber").html("0");
    } else {
        $("#cartnumber").html((numRolls.length).toString());
    }
}

$(document).ready(function() {
    rolls = JSON.parse(localStorage.getItem("rolls"));
    if (rolls == null) {
        rolls = [];
    }
    for (i = 0; i < rolls.length; i++){
        console.log(typeof(rolls[i]));
    }
    updateCartNumber();
    $("#cartbutton").click(function() {
        addRolltoCart();
        updateCartNumber();
    }); //Handles when people click on the button and also num of items in cart
    $("#selectquantity").change(function() {
        changePrice();
    });
    $("#selectglaze").change(function() {
        changeName();
        changeImg();
    });
});

