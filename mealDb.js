const loadMeal = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

const displayMeal = (meals) => {
//  console.log(meals.meals, 'allmell');
 const meals1 = meals.meals 
 const cardContainer = document.getElementById('card-Container')
 cardContainer.innerText =''
 for (const meal of meals1) {
    // console.log(meal);

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

const searchBtn = document.getElementById('btn-click')

const inputFild = document.getElementById('input-Fild')
inputFild.addEventListener('keyup', (e)=>{
  let val = e.target.value
  console.log(val);
 if (val === '') {
  searchBtn.setAttribute('disabled')
 }
 else{
  searchBtn.removeAttribute('disabled')
 }
})
const searchFunc = () =>{
 loadMeal(inputFild.value)
}


loadMeal('rice');
