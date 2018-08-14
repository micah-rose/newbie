/**
 * First file playing around with JavaScript
 */

// console.log("Hello World!\n");
// console.log("Hey, girl... what's your sign?\n");

let a = 2;
let b = 3;

let result = a + b;

console.log(result);

// zodiac();

// function zodiac()
// {
//     let sign = prompt("Hey, girl... what's your sign?");

//     switch(sign)
//     {
//         case "Gemini":
//         alert("We are compatible!!");
//         break;

//         case "Virgo":
//         alert("Yikes... not compatible.")
//         break;

//         default: "Meh, don't care."
//         break;
//     }
// }

//switch statement for zodiac signs (difference between var and let?)
// let sign = prompt("Hey, girl... what's your sign?");

// switch(sign)
// {
//     case "Gemini":
//     alert("We are compatible!!");
//     break;

//     case "Virgo":
//     alert("Yikes... not compatible.")
//     break;

//     default: "Meh, don't care."
//     break;
// }

//creating an object and using a function
let myCoffee = 
{
    flavor: "espresso",
    temperature: "iced",
    ounces: 24,
    milk: false ,

    addIce: function()
    {
        if(myCoffee.temperature == "warm")
            myCoffee.temperature = "iced";
            console.log("We have added ice to your coffee")
            //alert("We have added ice to your coffee");
    }
};
console.log(myCoffee.ounces);
// alert(myCoffee.ounces);

myCoffee.temperature = "warm";
myCoffee.addIce();

//creating an object constructor and creating an instance of Coffee
function Coffee(flavor, temperature, ounces)
{
    this.flavor = flavor;
    this.temperature = temperature;
    this.ounces = ounces;
}

let yourCoffee = new Coffee("french", "hot", 16);
console.log(yourCoffee.flavor);
//alert(yourCoffee.flavor);

//more Object practice - needs adjustments
// function ObjectName(param1, param2){
//     this.param1 = param1;
//     this.param2 = param2;
//     // this.toString = function(){
//     // return this.param1 + ' ' + param2;
//     //}
//     console.log(param1 + ' ' + param2);
// }

// var obj = new ObjectName("hello", "world");
// console.log(obj); 