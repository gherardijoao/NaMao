import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Pencil, Trash2 } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import handFlameIcon from "@/assets/hand-flame-icon.png";
import { defaultIngredients } from "@/data/mockData";
import { loadUserProfile } from "@/lib/userProfile";
import EditIngredientModal from "@/components/EditIngredientModal";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

const Home = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<string[]>(defaultIngredients);
  const [newIngredient, setNewIngredient] = useState("");
  const [editingIngredient, setEditingIngredient] = useState<string | null>(null);
  const [deletingIngredient, setDeletingIngredient] = useState<string | null>(null);

  const addIngredient = () => {
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const handleEditSave = (newValue: string) => {
    if (editingIngredient) {
      setIngredients(
        ingredients.map((i) => (i === editingIngredient ? newValue : i))
      );
      setEditingIngredient(null);
    }
  };

  const handleDeleteConfirm = () => {
    if (deletingIngredient) {
      setIngredients(ingredients.filter((i) => i !== deletingIngredient));
      setDeletingIngredient(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addIngredient();
    }
  };

  const handleSearch = () => {
    navigate("/receitas-encontradas", { state: { ingredients } });
  };

  const profile = loadUserProfile();

  return (
    <div className="page-container animate-fade-in">
      <div className="pt-8 pb-4">
        <h1 className="text-2xl font-bold text-foreground">
          Ola, {profile.name}!
        </h1>
        <p className="text-muted-foreground mt-1">
          O que temos na geladeira hoje?
        </p>
      </div>

      <div className="flex justify-center py-6">
        <img
          src={handFlameIcon}
          alt="NaMão"
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Adicione Ingredientes"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-namao pl-12"
        />
      </div>

      <div className="space-y-3 mb-6">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="ingredient-chip animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="flex-1 text-center">{ingredient}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingIngredient(ingredient)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDeletingIngredient(ingredient)}
                className="p-1 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSearch} className="btn-primary">
        Buscar Receitas
      </button>

      <EditIngredientModal
        open={!!editingIngredient}
        onOpenChange={(open) => !open && setEditingIngredient(null)}
        ingredient={editingIngredient || ""}
        onSave={handleEditSave}
      />

      <DeleteConfirmModal
        open={!!deletingIngredient}
        onOpenChange={(open) => !open && setDeletingIngredient(null)}
        title="Excluir ingrediente"
        description={`Tem certeza que deseja excluir "${deletingIngredient}"?`}
        onConfirm={handleDeleteConfirm}
      />

      <BottomNav />
    </div>
  );
};

export default Home;
