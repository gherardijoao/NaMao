import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loadUserProfile, saveUserProfile, UserProfile } from "@/lib/userProfile";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

type AppPref = { id: string; label: string; enabled?: boolean; value?: string };

const EditarPerfil = () => {
  const navigate = useNavigate();
  const stored = loadUserProfile();
  const [profile, setProfile] = useState<UserProfile>(stored);

  const setName = (value: string) => setProfile((p) => ({ ...p, name: value }));
  const setEmail = (value: string) => setProfile((p) => ({ ...p, email: value }));

  const handleToggleCulinary = (id: string, value: boolean) => {
    setProfile((p) => ({
      ...p,
      preferences: {
        ...p.preferences,
        culinary: p.preferences.culinary.map((c) =>
          c.id === id ? { ...c, enabled: value } : c,
        ),
      },
    }));
  };

  const handleToggleApp = (id: string, value: boolean) => {
    setProfile((p) => {
      const newApp = p.preferences.app.map((a) => {
        if ("enabled" in a && a.id === id) {
          // construct a Toggle-pref object
          return { id: a.id, label: a.label, enabled: value } as typeof a;
        }
        return a;
      });
      return { ...p, preferences: { ...p.preferences, app: newApp } };
    });
  };

  const handleChangeLanguage = (value: string) => {
    setProfile((p) => {
      const newApp = p.preferences.app.map((a) => {
        if ("value" in a && a.id === "language") {
          return { id: a.id, label: a.label, value } as typeof a;
        }
        return a;
      });
      return { ...p, preferences: { ...p.preferences, app: newApp } };
    });
  };

  const handleSave = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
    // persist alterações no localStorage
    saveUserProfile(profile);
    navigate("/perfil");
  };

  return (
    <div className="page-container animate-fade-in">
      <PageHeader title="Editar Perfil" showBack />

      <div className="mt-6 flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-4xl text-foreground">
            {profile.name.charAt(0).toUpperCase()}
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
            value={profile.name}
            onChange={(e) => setName(e.target.value)}
            className="bg-input border-border text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-foreground">E-mail</Label>
          <Input
            type="email"
            value={profile.email}
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

      {/* Preferences */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">Preferências de Culinária</h2>
        <div className="space-y-3">
          {profile.preferences.culinary.map((pref) => (
            <div
              key={pref.id}
              className="flex items-center justify-between bg-secondary rounded-xl px-4 py-4"
            >
              <div className="text-foreground">{pref.label}</div>
              <Switch
                checked={!!pref.enabled}
                onCheckedChange={(v) => handleToggleCulinary(pref.id, !!v)}
              />
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-foreground my-4">Preferências do Aplicativo</h2>
        <div className="space-y-3">
          {profile.preferences.app.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-secondary rounded-xl px-4 py-4"
            >
              <div className="text-foreground">{item.label}</div>
              {"enabled" in item ? (
                <Switch
                  checked={!!(item as AppPref).enabled}
                  onCheckedChange={(v) => handleToggleApp(item.id, !!v)}
                />
              ) : "value" in item ? (
                <select
                  value={(item as AppPref).value}
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                  className="bg-input text-foreground rounded-md px-3 py-2"
                >
                  <option>Português</option>
                  <option>English</option>
                </select>
              ) : null}
            </div>
          ))}
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
