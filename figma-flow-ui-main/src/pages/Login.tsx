import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-12 animate-fade-in">
      <Logo size="lg" />

      <div className="flex-1 flex flex-col justify-center mt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Bem Vindo De Volta
          </h2>
          <p className="text-muted-foreground">
            digite seu email e senha para acessar sua conta
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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
              Entrar
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Não tem uma conta?{" "}
            <button
              onClick={() => navigate("/cadastro")}
              className="text-primary font-medium hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
