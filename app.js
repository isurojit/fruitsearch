//Defining Ui
const filter = document.querySelector('.searchBar');
const fruitList = document.querySelector('.collection');

//Load Event Listners
loadEventListners();

//Load all event listners  function
function loadEventListners(){
    //filter fruit
    filter.addEventListener('keyup', filterFruit);
    //search Bar cross malfunction
    filter.addEventListener("search", closeSearch);
}

//filter function
function filterFruit(e){
    //Accessing input data from input field
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach
    (function (fruit){
        const item = fruit.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            fruit.style.display = 'block';
        }else{
            fruit.style.display = 'none';
        }
    });
}

//Search cross malfunction closeSearch
function closeSearch(e){
    document.location.reload();
}

//justr for fun
const heading = document.querySelector('#heading');
heading.style.cssText= "font-family: 'Langar', cursive;";
