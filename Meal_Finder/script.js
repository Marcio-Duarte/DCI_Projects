/* Event to submit the search form */
document.getElementById('submit').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('single-meal').innerHTML = '';
    let form_search = document.getElementById('search');

    if (form_search.value.trim()) {
        fetchMeal(form_search.value);
        form_search.value = '';
    } else {
        alert('Please enter a name for the desired meal...')
    }
});

/* Event to fetch a random dish*/
document.getElementById('random').addEventListener('click', () => {
    fetchRndMeal();
    document.getElementById('meals').innerHTML = '';
});

/* Function to fetch a dish by name */
async function fetchMeal(dish) {
    let URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;
    const response = await fetch(URL);
    const data = await response.json();
    const search_result = document.getElementById('result-heading');

    if (data.meals === null) {
        search_result.innerHTML = `<h1>There are no results for '${dish}':</h1>`;
    } else {
        search_result.innerHTML = `<h3>Search results for '${dish}':</h3>`;

        for (const key in data.meals) {
            let div = document.createElement('div');
            div.classList.add('meal');
            div.innerHTML = (`<img src="${data.meals[key].strMealThumb}" alt="Sorry... Image not available..." />
              <div class="meal-info" data-id="${key}">
                <h3>${data.meals[key].strMeal}</h3>
              </div>`);
            div.addEventListener('click', function () {
                createSingleMeal(data.meals[this.children[1].getAttribute('data-id')]);
            });
            document.getElementById('meals').append(div);
        }
    }
}

/* Function to fetch a random dish */
async function fetchRndMeal() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    const data = await response.json();
    createSingleMeal(data.meals[0])
}

/* Function to create the HTML element related to one dish */
function createSingleMeal(dish) {
    // Here I collect all the ingredients that are not empty or null in the Object and return them as <li>.
    let ingredients = Object.keys(dish)
        .filter(ingredient => ingredient.includes('strIngredient')
            && (dish[ingredient] != "") && dish[ingredient] != null)
        .map(ingredient => {
            return (`<li>${dish[ingredient]}</li>`)
        }).join('');

    document.getElementById('single-meal').innerHTML = (
        `<div class="single-meal">
            <h1>${dish.strMeal}</h1>
            <img src="${dish.strMealThumb}" alt="Sorry... Image not available..."/>
            <div class="single-meal-info">
                ${dish.strCategory ? `<p>${dish.strCategory}</p>` : ''}
                ${dish.strArea ? `<p>${dish.strArea}</p>` : ''}
             </div>
            <div class="main">
                <p>${dish.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>${ingredients} </ul>
            </div >
        </div >`);
}
