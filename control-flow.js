// Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayy(myArrayy){
    for(let n =0; n<myArrayy.length; n++){
        console.log(myArrayy[n]);
    }
}
let myArrayy = ["John","Jerry","Tomato","Books","Chalks"];
arrayy(myArrayy)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let numbers = [1,2,3,4,5,6,7,8,9];
function numberArray (numbers){
    numbers.forEach(function(i) {
        console.log(i*2)
        
    });
}
// let numbers = [1,2,3,4,5,6,7,8,9];
numberArray(numbers)

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

let myNumbers=[4,5,7,9,10,11,13,15]
p=0;
function numberFunc(myNumbers){
    for(let p =0; p<myNumbers.length; p++){
        if(p<4){
            myNumbers[p]*=8;
            }
        else if(p>myNumbers.length-2){
            myNumbers[p]+=5;
        }    
        
       
    }  
    console.log(myNumbers[p]);  
}

numberFunc(myNumbers)

//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

function array (arrNum){
    let i =0;
    while(i<arrNum.length){
       if( i===4)
       
   
     break;
      
    }
    console.log(arrNum) 
    i++ 
}
array(arrNum)

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function stringFunction(fruits){
    for(let m =0; m<fruits.length; m++){
   
        if(m===2){
           continue;
           
        }
        console.log(fruits[m]);
       
    }
}
stringFunction(fruits)