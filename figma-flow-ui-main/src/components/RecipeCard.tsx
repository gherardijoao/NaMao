import { ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  time: string;
  difficulty: string;
  image: string;
  showDelete?: boolean;
  onDelete?: () => void;
}

const RecipeCard = ({
  id,
  title,
  time,
  difficulty,
  image,
  showDelete,
  onDelete,
}: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <div
      onClick={() => navigate(`/receita/${id}`)}
      className="recipe-card animate-fade-in"
    >
      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-card">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {time} - {difficulty}
        </p>
      </div>
      {showDelete ? (
        <button
          onClick={handleDelete}
          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      ) : (
        <ChevronRight className="w-6 h-6 text-primary flex-shrink-0" />
      )}
    </div>
  );
};

export default RecipeCard;
