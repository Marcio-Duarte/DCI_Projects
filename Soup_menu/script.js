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

function createSingleMeal(data) {
    // Here I collect all the ingredients that are not empty or null in the Object and return them as <li>.

    let ingredients = Object.keys(data)
        .filter(ingredient => ingredient.includes('strIngredient')
            && (data[ingredient] != "") && data[ingredient] != null)
        .map(ingredient => {
            return (`<li>${data[ingredient]}</li>`)
        }).join('');
    console.log(ingredients);
    document.getElementById('single-meal').innerHTML = (
        `<div class="single-meal">
            <h1>${data.strMeal}</h1>
            <img src="${data.strMealThumb}" alt="Sorry... Image not available..."/>
            <div class="single-meal-info">
                ${data.strCategory ? `<p>${data.strCategory}</p>` : ''}
                ${data.strArea ? `<p>${data.strArea}</p>` : ''}
             </div>
            <div class="main">
                <p>${data.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>${ingredients} </ul>
            </div >
        </div >`);
}
