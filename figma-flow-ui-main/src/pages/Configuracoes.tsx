import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, Moon, Globe, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import PageHeader from "@/components/PageHeader";
import { Switch } from "@/components/ui/switch";
import { loadUserProfile } from "@/lib/userProfile";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";
import { toast } from "@/hooks/use-toast";

const Configuracoes = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate("/login");
  };

  const profile = loadUserProfile();

  const settingsItems = [
    {
      icon: User,
      label: "Editar Perfil",
      action: () => navigate("/editar-perfil"),
      hasArrow: true,
    },
    {
      icon: Bell,
      label: "Notificações",
      toggle: true,
      value: notifications,
      onChange: setNotifications,
    },
    {
      icon: Moon,
      label: "Tema Escuro",
      toggle: true,
      value: darkTheme,
      onChange: setDarkTheme,
    },
    {
      icon: Globe,
      label: "Idioma",
      value: "Português",
      hasArrow: true,
      action: () => navigate("/idioma"),
    },
    {
      icon: Shield,
      label: "Privacidade",
      action: () => navigate("/privacidade"),
      hasArrow: true,
    },
    {
      icon: HelpCircle,
      label: "Ajuda",
      action: () => navigate("/ajuda"),
      hasArrow: true,
    },
  ];

  return (
    <div className="page-container animate-fade-in">
      <PageHeader title="Configurações" showBack />

      <div className="mt-6 space-y-2">
        {settingsItems.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className={`flex items-center justify-between bg-secondary rounded-xl px-4 py-4 ${
              item.action ? "cursor-pointer hover:bg-muted transition-colors" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground">{item.label}</span>
            </div>
            {item.toggle ? (
              <Switch
                checked={item.value as boolean}
                onCheckedChange={item.onChange}
                className="data-[state=checked]:bg-primary"
              />
            ) : item.value && !item.hasArrow ? (
              <span className="text-muted-foreground text-sm">{item.value}</span>
            ) : (
              <div className="flex items-center gap-2">
                {item.value && (
                  <span className="text-muted-foreground text-sm">{item.value}</span>
                )}
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}

        <div
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center justify-between bg-secondary rounded-xl px-4 py-4 cursor-pointer hover:bg-muted transition-colors mt-6"
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="text-destructive">Sair da Conta</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-sm">Versão 1.0.0</p>
        <p className="text-muted-foreground text-xs mt-1">
          {profile.email}
        </p>
      </div>

      <DeleteConfirmModal
        open={showLogoutModal}
        onOpenChange={(open: boolean) => setShowLogoutModal(open)}
        title="Sair da conta"
        description="Tem certeza que deseja sair da sua conta?"
        onConfirm={handleLogout}
      />

      <BottomNav />
    </div>
  );
};

export default Configuracoes;
