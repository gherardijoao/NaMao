import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/mockData";
import { loadSavedRecipeIds } from "@/lib/recipes";

const Salvas = () => {
  const savedIds = loadSavedRecipeIds();
  const savedRecipes = recipes.filter((recipe) => savedIds.includes(recipe.id));

  return (
    <div className="page-container animate-fade-in">
  <PageHeader showBack />

      <h1 className="text-2xl font-bold text-foreground mb-6">
        Receitas Salvas
      </h1>

      <div className="space-y-3">
        {savedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            time={recipe.time}
            difficulty={recipe.difficulty}
            image={recipe.image}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Salvas;
