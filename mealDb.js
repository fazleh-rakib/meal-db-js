const loadMeal = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

const displayMeal = (meals) => {
 console.log(meals.meals, 'allmell');
 const meals1 = meals.meals 
 const cardContainer = document.getElementById('card-Container')
 for (const meal of meals1) {
    console.log(meal);

    const creatDiv = document.createElement('div')
    creatDiv.classList.add('col')
    creatDiv.innerHTML=`
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p> ${meal.strCategory}</p>
    </div>
  </div>
    `
    cardContainer.appendChild(creatDiv)
 }
};

const inputFild = document.getElementById('input-Fild')
if

loadMeal('chi');
