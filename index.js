
//change navigation color on scroll
window.onload = function checkScroll(){
    Scrolled()
};
function Scrolled(){
    var fixedNav = document.getElementById("nav2");
    if(document.body.scrollTop < 0|| document.documentElement.scrollTop<0){
        fixedNav.style.backgroundColor = "rgb(88, 238, 150)";
    }
    else{
        fixedNav.style.backgroundColor = " rgb(88, 238, 150)";
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removebtns = document.getElementsByClassName("btn-danger");
    for(var i=0; i<removebtns.length; i++){
        var clicked = removebtns[i].addEventListener("click", removeCartItem);
        console.log(clicked);
    }

}
//working on the remove button

function removeCartItem(event){
    event.target.parentElement.parentElement.remove();
    updateTotal();
    //the target value is wherever the listener function is placed
//and the event property is predefined in js
}
//UPDATING TOTAL
function updateTotal(){
    //Item1 on the cart
var cartItems = document.getElementsByClassName("cart-items")[0];
var cartRows = cartItems.getElementsByClassName("cart-row");
//looping through all item rows
var total = 0;
for(var i=0; i<cartRows.length; i++){
    eachCartRow = cartRows[i];
    var priceElement = eachCartRow.getElementsByClassName("each-price")[0];
    var price = priceElement.innerText.replace("$", "");//removed $ sign but still a string not float
    var quantity = eachCartRow.getElementsByClassName("cart-quantity-input")[0].value;
    total = total + parseFloat( (price*quantity) );
   total = Math.round(total * 100) / 100 //rounding off to prevent overfloating
    var finalTotalElement = document.getElementsByClassName("cart-total-price")[0];
    finalTotalElement.innerText = "$" + total;
    //console.log(total);
//var eachTotal = parseFloat( (price*quantity) );
//console.log(eachTotal) to check 
                                    }
                                } 

//UPDATE TOTAL WHEN QUANTITY INPUT VALUE CHANGES
/*var quantityElement = document.getElementsByClassName("cart-quantity-input");
for(var i=0; i<quantityElement.length; i++){
    var input = quantityElement[i].value;
    var x = input.onchange = changed();

}*/
var quantityElement = document.getElementsByClassName("cart-quantity-input")
var input = quantityElement.value;
function changed(){
  if(isNaN(input)||input<0){
  input = 1;
  updateTotal();
  }
  
                  } 



