
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)

        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let vegetarianFood = problemOne();
console.log("1) Vegetarian dishes are", vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){
    
    let choice = prompt("What cuisine do you choose ?")
    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === choice){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let usersSelection = problemTwo();
console.log("2) Dishes to choose from.", usersSelection)

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){

    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === "Italian" && el.servings > 5){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let italianFood = problemThree();
console.log("3) Italian dishes with large serving size are", italianFood)

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){

    let results;
    results = dishes.filter(function(el){
        if(el.id === el.servings){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let idServings = problemFour();
console.log("4) Dishes with equal id and serving size are", idServings)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){

    let results;
    results = dishes.filter(function(el){
        if(el.servings % 2 == 0){
            return true;
        }
        else{
            return false;
        }})

    return results;
}
let evenServings = problemFive();
console.log("5) Dishes with even serving sizes are", evenServings)

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){

    let results;
    results = dishes.filter(function(el){
        let i = 0
        for(ingredient of el.ingredients){
            i++
            if(ingredient == "chickpea"){
                return true;
            }
            else if(i == el.ingredients.length){
                return false;
        }}})

    return results;
}
let chickpeaIn = problemSix();
console.log("6) Dishes with chickpea in the ingredients are", chickpeaIn)

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(choice){

    let results;
    results = dishes.filter(function(el){
        let i = 0
        for(let ingredient of el.ingredients){
            i++
            if(ingredient == choice){
                return true;
            }
            else if(i == el.ingredients.length){
                return false;
        }}})

    return results;
}
let choice = prompt("What ingredient do you want in your dish?")
let ingredientIn = problemSeven(choice);
console.log("7) Dishes with chickpea in the ingredients are", ingredientIn)

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function map(array) {
    const newCuisineArray = [];
    for (let item of array) {
        newCuisineArray.push(item.cuisine)
    }
    return newCuisineArray;
}
let cuisineArray = map(dishes)
console.log("8a) The cuisine types are", cuisineArray)

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function map(array) {
    const newCuisineArray = [];
    for (let item of array) {
        newCuisineArray.push(item.cuisine + " " + item.name)
    }
    return newCuisineArray;
}
let cuisineName = map(dishes)
console.log("9) The cuisine types added to the dish title are", cuisineName)

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

let vegetarianObject = problemOne();
let dishName = map(vegetarianObject)
console.log("10) Vegetarian dishes and their names are", dishName)



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.



//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){

    let results;
    results = dishes.filter(function(el){
        let i = 0
        for(let ingredient of el.ingredients){
            i++
            if(ingredient == "tomato" || ingredient == "cheese"){
                return true;
            }
            else if(i == el.ingredients.length){
                return false;
        }}})

    return results;
}
let tomatoCheese = problemEleven();
console.log("11) Dishes with tomato or cheese in the ingredients are", tomatoCheese)

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

let sum = dishes.reduce(function(sum, el){
    return sum += el.servings;
    console.log(sum)
})
console.log(sum)

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
