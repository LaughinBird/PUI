function createPicture(object) {
    var name = object.name;
    var span = document.createElement("SPAN");
    // span.className = "insidecart";
    var img = document.createElement("IMG");
    img.className = "cartimg";
    if (name == "Original") {
        img.setAttribute("src", "Assets/original.jpg");
    } else if (name == "Caramel Pecan") {
        img.setAttribute("src", "Assets/caramel.jpg");
    } else if (name == "Caramel Pecan with Sugar Milk Glaze" ||
                        "Caramel Pecan with Vanilla Milk Glaze" ||
                        "Caramel Pecan with Double Chocolate Glaze") {
        img.setAttribute("src", "Assets/caramel2.jpg");
    }
    span.appendChild(img);
    return span;
}

function createName(object) {//Returns the span with the name of the item
    var name = object.name;
    var span = document.createElement("SPAN");
    span.className = "insidecart";
    span.setAttribute("id", "insidecartfirst")
    if (name == "Caramel Pecan" || "Caramel Pecan with Sugar Milk Glaze" ||
                "Caramel Pecan with Vanilla Milk Glaze" ||
                "Caramel Pecan with Double Chocolate Glaze") {
        var text = document.createTextNode("Caramel Pecan");
        span.appendChild(text);
        return span;
    } else {
        return null;
    }
}

function createGlaze(object) {//Returns the span with the glaze of the item
    var glaze = object.glaze;
    var span = document.createElement("SPAN");
    span.className = "insidecart";
    if (glaze == "none") {
        var text = document.createTextNode("None");
        span.appendChild(text);
        return span;
    } else if (glaze == "sugar-milk") {
        var text = document.createTextNode("Sugar-Milk");
        span.appendChild(text);
        return span;
    } else if (glaze == "vanilla-milk") {
        var text = document.createTextNode("Vanilla-Milk");
        span.appendChild(text);
        return span;
    } else if (glaze == "double-chocolate") {
        var text = document.createTextNode("Double-Chocolate");
        span.appendChild(text);
        return span;
    }
}

function createQuantity(object) {
    var quantity = object.quantity;
    var span = document.createElement("SPAN");
    span.className = "insidecart";
    if (quantity == "1") {
        var text = document.createTextNode("1");
        span.appendChild(text);
        return span;
    } else if (quantity == "3") {
        var text = document.createTextNode("3");
        span.appendChild(text);
        return span;
    } else if (quantity == "6") {
        var text = document.createTextNode("6");
        span.appendChild(text);
        return span;
    } else if (quantity == "12") {
        var text = document.createTextNode("12");
        span.appendChild(text);
        return span;
    }
}

function createPrice(object) {
    var price = object.price;
    var span = document.createElement("SPAN");
    span.className = "insidecart";
    if (price == "$1.99") {
        var text = document.createTextNode("$1.99");
        span.appendChild(text);
        return span;
    } else if (price == "$4.99") {
        var text = document.createTextNode("$4.99");
        span.appendChild(text);
        return span;
    } else if (price == "$8.99") {
        var text = document.createTextNode("$8.99");
        span.appendChild(text);
        return span;
    } else if (price == "$10.99") {
        var text = document.createTextNode("$10.99");
        span.appendChild(text);
        return span;
    }
}

function createRemoveButton(object) {
    var span = document.createElement("SPAN");
    span.className = "insidecart";
    var remove = document.createElement("BUTTON");
    remove.className = "remove";
    var text = document.createTextNode("Remove Item");
    remove.appendChild(text);
    span.appendChild(remove);
    return span;
    //Remove item button needs to keep something about what the object is
    //use the splice method to remove stuff
}

function displayTotal(list) {
    var total = 0.00;
    for (i = 0; i < list.length; i++) {//loop through all the objects in list
        var pricestring = list[i].price;
        var pricestring2 = pricestring.slice(1, pricestring.length); //get rid of $ sign
        var priceinInt = parseFloat(pricestring2);
        total = total + priceinInt;
    }
    total = Number((total).toFixed(2));
    $("#totalprice").html("$" + total);
}

function removeItem(button) {
    var rolls = JSON.parse(localStorage.getItem("rolls"));
    var spanParent = button.parent();
    var divParent = spanParent.parent();
    var bigdivParent = divParent.parent();//HOLDS ALL CART CONTENTS
    var indexStr = divParent.attr("id");
    var index = parseInt(indexStr);
    rolls.splice(index, 1);
    localStorage.setItem("rolls", JSON.stringify(rolls));//Update local storage
    $(divParent).remove();
}

$(document).ready(function() {
    var cartitems = JSON.parse(localStorage.getItem("rolls"));//Retrieve array
    if (cartitems == null) {
        $("#cartContents").html("There are no items in the cart");
    } else {
        for (i = 0; i < cartitems.length; i++) {
            var rollInCart = cartitems[i];//get the roll that we want to look at
            var outsideDiv = document.createElement("div");//Big Div
            outsideDiv.className = "cartcontent";
            var stringIndex = i.toString(); //Make the index a string
            outsideDiv.setAttribute("id", stringIndex);
            outsideDiv.appendChild(createPicture(rollInCart));
            outsideDiv.appendChild(createName(rollInCart));
            outsideDiv.appendChild(createGlaze(rollInCart));
            outsideDiv.appendChild(createQuantity(rollInCart));
            outsideDiv.appendChild(createPrice(rollInCart));
            outsideDiv.appendChild(createRemoveButton(rollInCart));
            $("#cartContents").append(outsideDiv);
        }
    displayTotal(cartitems);
    }
    $(".remove").click(function() {
        removeItem($(this));//call the button
        var newcart = JSON.parse(localStorage.getItem("rolls"));
        displayTotal(newcart);
    });
});

