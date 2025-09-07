const recipeList = document.getElementById("recipeList");

// Load categories & cuisines on page load
document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
    loadAreas();
    addVegNonVegOptions();
});

// Search by name
async function searchRecipe() {
    const query = document.getElementById("searchInput").value.trim();
    if (!query) {
        alert("Please enter a recipe name!");
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        if (!data.meals) {
            recipeList.innerHTML = `<p class="text-center text-danger">No recipes found for "${query}". Try another dish!</p>`;
            return;
        }

        displayRecipes(data.meals);
    } catch (error) {
        recipeList.innerHTML = `<p class="text-center text-danger">⚠️ Error fetching recipes. Please try again later.</p>`;
        console.error("Search Error:", error);
    }
}

// Load categories
async function loadCategories() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    const data = await response.json();
    const categorySelect = document.getElementById("categorySelect");

    data.meals.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.strCategory;
        option.textContent = cat.strCategory;
        categorySelect.appendChild(option);
    });
}

// Load cuisines (areas)
async function loadAreas() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const data = await response.json();
    const areaSelect = document.getElementById("areaSelect");

    data.meals.forEach(area => {
        const option = document.createElement("option");
        option.value = area.strArea;
        option.textContent = area.strArea;
        areaSelect.appendChild(option);
    });
}

// Add Vegetarian / Non-Vegetarian manually
function addVegNonVegOptions() {
    const categorySelect = document.getElementById("categorySelect");

    let veg = document.createElement("option");
    veg.value = "VegetarianOnly";
    veg.textContent = "Vegetarian (Pure Veg)";
    categorySelect.appendChild(veg);

    let nonVeg = document.createElement("option");
    nonVeg.value = "NonVegetarianOnly";
    nonVeg.textContent = "Non-Vegetarian (With Egg)";
    categorySelect.appendChild(nonVeg);
}

// Filter by category
async function filterByCategory() {
    const category = document.getElementById("categorySelect").value;
    if (!category) return;

    if (category === "VegetarianOnly") {
        // ✅ Only Veg
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`);
        const data = await response.json();
        displayRecipes(data.meals, "veg");
    }
    else if (category === "NonVegetarianOnly") {
        // ✅ All Non-Veg including Egg
        const categories = ["Beef", "Chicken", "Goat", "Lamb", "Pork", "Seafood", "Miscellaneous", "Breakfast"];
        let allMeals = [];

        for (let cat of categories) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
            const data = await response.json();
            if (data.meals) {
                allMeals = allMeals.concat(data.meals);
            }
        }

        displayRecipes(allMeals, "non-veg");
    }
    else {
        // Normal category
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        displayRecipes(data.meals);
    }
}

// Filter by cuisine
async function filterByArea() {
    const area = document.getElementById("areaSelect").value;
    if (!area) return;

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    displayRecipes(data.meals);
}

// Display recipes
function displayRecipes(meals, type = "") {
    recipeList.innerHTML = "";
    if (meals && meals.length > 0) {
        meals.forEach(meal => {
            const col = document.createElement("div");
            col.className = "col-md-4 col-lg-3 mb-4";
            col.innerHTML = `
            <div class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
              <div class="card-body text-center">
                <h5 class="card-title">${meal.strMeal}</h5>
                <span class="badge ${type === "veg" ? "bg-success" : type === "non-veg" ? "bg-danger" : "bg-secondary"}">
                  ${type === "veg" ? "Veg" : type === "non-veg" ? "Non-Veg" : "Recipe"}
                </span>
                <br><br>
                <button class="btn btn-outline-primary btn-sm" onclick="showRecipe(${meal.idMeal})">View Recipe</button>
              </div>
            </div>
          `;
            recipeList.appendChild(col);
        });

        // Auto scroll to recipes grid
        recipeList.scrollIntoView({ behavior: "smooth", block: "start" });

    } else {
        recipeList.innerHTML = `<p class="text-center text-danger">No recipes found!</p>`;
    }
}

// Show full recipe
async function showRecipe(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];

    document.getElementById("recipeTitle").innerText = meal.strMeal;
    document.getElementById("recipeImg").src = meal.strMealThumb;
    document.getElementById("recipeCategory").innerText = meal.strCategory;
    document.getElementById("recipeArea").innerText = meal.strArea;
    document.getElementById("recipeInstructions").innerText = meal.strInstructions;
    document.getElementById("recipeVideo").href = meal.strYoutube;

    // Open modal
    new bootstrap.Modal(document.getElementById("recipeModal")).show();

    // ✅ Auto scroll to bottom (recipe details & video)
    document.getElementById("recipeModal").scrollIntoView({ behavior: "smooth", block: "end" });
}
