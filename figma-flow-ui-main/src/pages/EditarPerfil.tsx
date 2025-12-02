import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userProfile } from "@/data/mockData";
import { loadUserProfile, saveUserProfile } from "@/lib/userProfile";
import { toast } from "@/hooks/use-toast";

const EditarPerfil = () => {
  const navigate = useNavigate();
  const stored = loadUserProfile();
  const [name, setName] = useState(stored.name || userProfile.name);
  const [email, setEmail] = useState(stored.email || userProfile.email);

  const handleSave = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
    // persist alterações no localStorage
    saveUserProfile({ ...stored, name, email });
    navigate("/perfil");
  };

  return (
    <div className="page-container animate-fade-in">
      <PageHeader title="Editar Perfil" showBack />

      <div className="mt-6 flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-4xl text-foreground">
            {name.charAt(0).toUpperCase()}
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Camera className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label className="text-foreground">Nome</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-input border-border text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">E-mail</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-input border-border text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">Senha</Label>
          <Input
            type="password"
            placeholder="••••••••"
            className="bg-input border-border text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">Confirmar Senha</Label>
          <Input
            type="password"
            placeholder="••••••••"
            className="bg-input border-border text-foreground"
          />
        </div>
      </div>

      <div className="mt-8">
        <Button onClick={handleSave} className="btn-primary">
          Salvar Alterações
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default EditarPerfil;
