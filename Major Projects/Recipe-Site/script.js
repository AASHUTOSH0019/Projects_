const SearchBar = document.querySelector(".SearchBar");
const SearchBtn = document.getElementById("SearchBtn");
const MainSecRecipe = document.querySelector(".MainSec");
const RecipeContent = document.querySelector(".RecipeContentDetails");
const CloseBtn = document.querySelector(".Recipe-Close-btn");

const display = async (query) => {
  MainSecRecipe.innerHTML = "<h2>Fetching Recipes........</h>";
  const fetch_data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await fetch_data.json();

  MainSecRecipe.innerHTML = "";
  response.meals.forEach((meal) => {
    const recipe = document.createElement("div");
    recipe.classList.add("recipe");
    recipe.innerHTML = `
          <img src = "${meal.strMealThumb}" >
          <h3>${meal.strMeal}</h3>
          <p><span>${meal.strArea}</span>Dish</p>
          <p class="Space" >Belongs to<span>${meal.strCategory}</span>Category</p>

          `;

    const button = document.createElement("button");
    button.textContent = "View Recipe";

    button.addEventListener("click", () => {
      OpenRecipeMenu(meal);
    });
    recipe.appendChild(button);
    MainSecRecipe.appendChild(recipe);
  });
};
const ListofIngredients = (meal) => {
  console.log(meal);
  let IngredientsList = [];
  for (let i = 1; i < 20; i++) {
    const Ingredient = meal[`strIngredient${i}`];
    if (Ingredient) {
      const Measure = meal[`strMeasure${i}`];
      IngredientsList += `<li>${Measure} :- ${Ingredient}</li>`;
    } else {
      break;
    }
  }
  return IngredientsList;
};
const OpenRecipeMenu = (meal) => {
  RecipeContent.innerHTML = `
  <h2 class = "MainNamePopUp">${meal.strMeal}</h2>
  <h3 class = "Ingredient">Ingrediants</h3>
<ul class = "ListOfIngredient" >${ListofIngredients(meal)}</ul>
  <div class="InstructionContainer">
    <h3 class= "Instruction">Instruction</h3>
    <p class="RecipeInstructions" >${meal.strInstructions}</p>
</div>`;
  RecipeContent.parentElement.style.display = "block";
};

CloseBtn.addEventListener("click", () => {
  RecipeContent.parentElement.style.display = "none";
});
SearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const SearchInput = SearchBar.value.trim();
  if (!SearchInput) {
    MainSecRecipe.innerHTML = `<h2   class='bx bxs-error'>Please type the Meal You Want to Search in Search Box...</h2>`;
    return;
  }
  display(SearchInput);
});
