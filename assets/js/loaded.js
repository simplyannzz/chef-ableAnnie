$(document).ready(function()
{
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});


})
function toggleModal()
{
    let instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}

let shopping_list_item = [];
let shopping_list_quantity = [];
let shopping_list_weight = [];
let count_item = 0;
let count_quantity = 0;
let count_weight = 0;
let food_allergies = ["banana", "pork"];



function shoppingList()
{
    let item_chosen = document.getElementById("item").value;
    item_chosen = item_chosen.toLowerCase();
    
    for(let i = 0; i < food_allergies.length; i++)
    {
        if(item_chosen === food_allergies[i])
        {
            console.log("TEst");
            item_chosen = item_chosen + "*";

        }
        else
        {
            console.log("null");
        }
    }  
    if( item_chosen === "")
    {
        alert("Please enter a food item");
        return false
    }
    else
    {
        shopping_list_item.push(item_chosen);
        document.getElementById("shopping_list_array_item").innerHTML +=
            shopping_list_item[count_item] + "<br>";        
        count_item += 1;
        let item_input = document.getElementById("item");
        item_input.value = "";
    }    
    localStorage.setItem("Food Item", JSON.stringify(shopping_list_item));

    let quantity_chosen = document.getElementById("quantity").value;    
    if(quantity_chosen === "")
    {
        quantity_chosen = "none";
        shopping_list_quantity.push(quantity_chosen);
        document.getElementById("shopping_list_array_quantity").innerHTML += 
        shopping_list_quantity[count_quantity] + "<br>";
        count_quantity += 1;
        let quantity_item = document.getElementById("quantity");
        quantity_item.value = "";
    }
    else
    {
        shopping_list_quantity.push(quantity_chosen);
        document.getElementById("shopping_list_array_quantity").innerHTML +=
        shopping_list_quantity[count_quantity] + "<br>";
        count_quantity += 1;
        let quantity_item = document.getElementById("quantity");
        quantity_item.value = "";
    }
    localStorage.setItem("Quantity", JSON.stringify(shopping_list_quantity));

    let weight_chosen = document.getElementById("weight").value;    
    if(weight_chosen === "")
    {
        weight_chosen = "none";
        shopping_list_weight.push(weight_chosen);
        document.getElementById("shopping_list_array_weight").innerHTML += 
        shopping_list_weight[count_weight] +"<br>";
        count_weight += 1;
        let weight_item = document.getElementById("weight");
        weight_item.value = "";
    }
    else
    {
        shopping_list_weight.push(weight_chosen);
        document.getElementById("shopping_list_array_weight").innerHTML += 
        shopping_list_weight[count_weight] + "<br>";
        count_weight += 1;
        let weight_item = document.getElementById("weight");
        weight_item.value = "";
    }
    localStorage.setItem("Weight", JSON.stringify(shopping_list_weight)); 
   
   

}

// calorie
let count = 0;
let click = 0;
let recipe = [];



// function displayShoppingList()
// {  if(click < 1)
//     {
//         let status = "green";

    
//         let foodItemList = JSON.parse(localStorage.getItem("Food Item"));
//         console.log(foodItemList);    
          
//         let quantityItemList = JSON.parse(localStorage.getItem("Quantity"));
//         console.log(quantityItemList); 
         
//         let weightList = JSON.parse(localStorage.getItem("Weight"));
//         console.log(weightList);
    
//         for(let i = 0; i < foodItemList.length; i++)
//         {
//             if(foodItemList[i].slice(-1) === "*")
//             {
//                 document.getElementById("food-item").innerHTML += "<br>" +  foodItemList[i].fontcolor("red") + "<br>";
//                 document.getElementById("quantity-item").innerHTML +=  "<br>" +  quantityItemList[i].fontcolor("red") + "<br>";
//                 document.getElementById("weight-item").innerHTML +=  "<br>" + weightList[i].fontcolor("red") + "<br>";
              
    
//             }
//             else
//             {
//                 document.getElementById("food-item").innerHTML +=  "<br>" +  foodItemList[i].fontcolor("black") + "<br>";
//                 document.getElementById("quantity-item").innerHTML +=  "<br>" +  quantityItemList[i].fontcolor("black") + "<br>";
//                 document.getElementById("weight-item").innerHTML += "<br>" +  weightList[i].fontcolor("black") + "<br>";
//             }    
//         } 
//         click += 1;

//     }
//     else
//     {
//         return false;
//     }
  
// }

function calorieCount()
{
    let food_item = document.getElementById("input-text").value;
    let item_quantity = document.getElementById("input-quantity").value;

    let query = food_item;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'skcHYEi7icyuCh5wj//zJg==hljSgIbyDIIh5Qbl'},
    contentType: 'application/json',
    success: function(result) {
        
        document.getElementById("itemQuantity").innerHTML = item_quantity;

        
        document.getElementById("display-calorie").innerHTML = item_quantity * (result[0].calories);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

}
function clearTable()
{
    document.getElementById("input-text").value = "";
    document.getElementById("input-quantity").value = "";
    document.getElementById("itemQuantity").innerHTML = "";
    document.getElementById("display-calorie").innerHTML = "";
}

