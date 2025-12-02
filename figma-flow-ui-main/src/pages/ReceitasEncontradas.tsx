import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/mockData";
import { useLocation } from "react-router-dom";

function matchesIngredients(recipeIngredients: string[], ingredients: string[]) {
  if (!ingredients || ingredients.length === 0) return true;
  const haystack = recipeIngredients.join(" ").toLowerCase();
  return ingredients.some((ing) => haystack.includes(ing.toLowerCase()));
}

const ReceitasEncontradas = () => {
  const location = useLocation();
  const state = (location.state as { ingredients?: string[] } | null) || null;
  const ingredients = state?.ingredients ?? [];

  const filtered = recipes.filter((r) => matchesIngredients(r.ingredients, ingredients));

  return (
    <div className="page-container animate-fade-in">
      <PageHeader showBack showFilter />

      <h1 className="text-2xl font-bold text-foreground mb-6">
        Receitas Encontradas
      </h1>

      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              time={recipe.time}
              difficulty={recipe.difficulty}
              image={recipe.image}
            />
          ))
        ) : (
          <p className="text-muted-foreground">Nenhuma receita encontrada para os ingredientes selecionados.</p>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default ReceitasEncontradas;
