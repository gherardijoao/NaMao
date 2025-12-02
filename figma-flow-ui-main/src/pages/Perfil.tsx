import { Leaf, Wheat, Milk, Bell, Moon, Globe } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { loadUserProfile } from "@/lib/userProfile";

const Perfil = () => {
  const culinaryIcons: Record<string, React.ElementType> = {
    vegetarian: Leaf,
    glutenFree: Wheat,
    lactoseFree: Milk,
  };

  const appIcons: Record<string, React.ElementType> = {
    notifications: Bell,
    darkTheme: Moon,
    language: Globe,
  };

  const profile = loadUserProfile();

  return (
    <div className="page-container animate-fade-in">
      <PageHeader title="Meu Perfil" showBack showSettings />

      <section className="mt-6">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Preferências de Culinária
        </h2>
        <div className="space-y-3">
          {profile.preferences.culinary.map((pref) => {
            const Icon = culinaryIcons[pref.id];
            return (
              <div key={pref.id} className="flex items-center gap-3 text-foreground">
                <Icon className="w-5 h-5 text-primary" />
                <span>{pref.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Preferências do Aplicativo
        </h2>
        <div className="space-y-3">
          {profile.preferences.app.map((pref) => {
            const Icon = appIcons[pref.id];
            return (
              <div key={pref.id} className="flex items-center gap-3 text-foreground">
                <Icon className="w-5 h-5 text-primary" />
                <span>{pref.label}</span>
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
