import { useState } from "react";
import { useParams } from "react-router-dom";
import { Share2, Clock, ChefHat } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { recipes } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { isRecipeSaved, toggleRecipeSaved } from "@/lib/recipes";

const Receita = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);
  const [isBookmarked, setIsBookmarked] = useState(isRecipeSaved(id));

  const handleBookmarkToggle = () => {
    const res = toggleRecipeSaved(id || "");
    setIsBookmarked(res.saved);
    toast({
      title: res.saved ? "Receita salva" : "Receita removida",
      description: res.saved
        ? "Receita adicionada às salvas!"
        : "Receita removida das salvas.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe?.title,
        text: `Confira essa receita: ${recipe?.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado",
        description: "Link da receita copiado para a área de transferência.",
      });
    }
  };

  if (!recipe) {
    return (
      <div className="page-container flex items-center justify-center">
        <p className="text-muted-foreground">Receita não encontrada</p>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      <PageHeader
        showBack
        showBookmark
        isBookmarked={isBookmarked}
        onBookmarkToggle={handleBookmarkToggle}
      />

      <h1 className="text-2xl font-bold text-foreground mb-4">{recipe.title}</h1>

      <div className="rounded-2xl overflow-hidden mb-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{recipe.time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ChefHat className="w-4 h-4" />
          <span className="text-sm">{recipe.difficulty}</span>
        </div>
        <button
          onClick={handleShare}
          className="ml-auto flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Compartilhar</span>
        </button>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Ingredientes</h2>
        <ul className="space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Modo de Preparo</h2>
        <ol className="space-y-3">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex gap-3 text-foreground">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                {index + 1}
              </span>
              <span className="pt-0.5">{instruction}</span>
            </li>
          ))}
        </ol>
      </section>

      <BottomNav />
    </div>
  );
};

export default Receita;
