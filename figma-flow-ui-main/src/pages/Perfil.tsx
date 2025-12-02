import { Leaf, Wheat, Milk } from "lucide-react";
import { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { loadUserProfile, saveUserProfile } from "@/lib/userProfile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Perfil = () => {
  const culinaryIcons: Record<string, React.ElementType> = {
    vegetarian: Leaf,
    glutenFree: Wheat,
    lactoseFree: Milk,
  };

  const [profile, setProfile] = useState(loadUserProfile());
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setProfile(loadUserProfile());
  }, []);

  const handleChangeCulinary = (id: string, value: string) => {
    setProfile((p) => ({
      ...p,
      preferences: {
        ...p.preferences,
        culinary: p.preferences.culinary.map((c) => (c.id === id ? { ...c, label: value } : c)),
      },
    }));
  };

  const handleChangeName = (value: string) => setProfile((p) => ({ ...p, name: value }));
  const handleChangeEmail = (value: string) => setProfile((p) => ({ ...p, email: value }));

  const handleSave = () => {
    saveUserProfile(profile);
    toast({ title: "Perfil salvo", description: "Suas alterações foram salvas." });
    setEditing(false);
  };

  return (
    <div className="page-container animate-fade-in">
      <PageHeader title="Meu Perfil" showBack showSettings={false} />

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">Dados</h2>
          <div>
            {editing ? (
              <Button onClick={handleSave} className="btn-primary">Salvar</Button>
            ) : (
              <Button onClick={() => setEditing(true)} className="btn-primary">Editar</Button>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <Label className="text-foreground">Nome</Label>
            <Input
              value={profile.name}
              onChange={(e) => handleChangeName(e.target.value)}
              disabled={!editing}
              className="bg-input border-border text-foreground"
            />
          </div>

          <div>
            <Label className="text-foreground">E-mail</Label>
            <Input
              value={profile.email}
              onChange={(e) => handleChangeEmail(e.target.value)}
              disabled={!editing}
              className="bg-input border-border text-foreground"
            />
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Preferências de Culinária</h2>
        <div className="space-y-3">
          {profile.preferences.culinary.map((pref) => {
            const Icon = culinaryIcons[pref.id];
            return (
              <div key={pref.id} className="flex items-center gap-3 text-foreground">
                <Icon className="w-5 h-5 text-primary" />
                <Input
                  value={pref.label}
                  onChange={(e) => handleChangeCulinary(pref.id, e.target.value)}
                  disabled={!editing}
                  className="bg-input border-border text-foreground"
                />
              </div>
            );
          })}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Perfil;
