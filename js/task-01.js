





console.log("Number of categories:", document.querySelectorAll(".item").length);

// Вариант №1

// for (let i = 0; i < document.querySelectorAll(".item").length; i+=1) {
//     const element = document.querySelectorAll(".item")[i];
 
//     console.log('Category:' , element.firstElementChild.textContent);
//     console.log('Elements:' , element.querySelectorAll('li').length);
    
// };

// Вариант №2

const categoryEl = document.querySelectorAll(".item").forEach((element) => {
    console.log('Category:' , element.firstElementChild.textContent);
    console.log('Elements:' , element.querySelectorAll('li').length);
})
