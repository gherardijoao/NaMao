import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EditIngredientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ingredient: string;
  onSave: (newIngredient: string) => void;
}

const EditIngredientModal = ({
  open,
  onOpenChange,
  ingredient,
  onSave,
}: EditIngredientModalProps) => {
  const [value, setValue] = useState(ingredient);

  const handleSave = () => {
    if (value.trim()) {
      onSave(value.trim());
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Editar Ingrediente</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-input border-border text-foreground"
            placeholder="Nome do ingrediente"
          />
        </div>
        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-border text-foreground hover:bg-secondary"
          >
            Cancelar
          </Button>
          <Button onClick={handleSave} className="bg-primary text-primary-foreground">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditIngredientModal;
