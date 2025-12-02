import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-12 animate-fade-in">
      <Logo size="lg" />

      <div className="flex-1 flex flex-col justify-center mt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Todas suas receitas em um só lugar
          </h2>
          <p className="text-muted-foreground">
            Crie sua conta para acessar a plataforma
          </p>
        </div>

        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-namao"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-namao"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-namao"
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="btn-primary">
              Cadastrar
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Já tem uma conta?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-primary font-medium hover:underline"
            >
              Faça Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
