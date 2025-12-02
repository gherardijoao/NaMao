import omeleteTurbinado from "@/assets/omelete-turbinado.jpg";
import sopaTomate from "@/assets/sopa-tomate.jpg";
import macarraoQueijo from "@/assets/macarrao-queijo.jpg";

export interface Recipe {
  id: string;
  title: string;
  time: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  isSaved: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Omelete Turbinado",
    time: "10 min",
    difficulty: "Fácil",
    image: omeleteTurbinado,
    ingredients: [
      "2 ovos",
      "1 tomate médio",
      "30g de queijo",
      "1/2 cebola pequena",
      "sal e pimenta a gosto",
      "1 colher de chá de manteiga ou azeite para fritar",
    ],
    instructions: [
      "Bata os ovos em uma tigela com o sal e a pimenta até misturar bem.",
      "Aqueça a frigideira em fogo médio e derreta a manteiga ou aqueça o azeite.",
      "Refogue a cebola por 1–2 minutos até ficar levemente dourada.",
      "Adicione o tomate e refogue mais 1 minuto.",
      "Despeje os ovos batidos sobre os legumes e deixe cozinhar por alguns segundos sem mexer.",
      "Espalhe o queijo por cima.",
      "Quando as bordas começarem a firmar, dobre a omelete ao meio com cuidado.",
      "Cozinhe por mais 1 minuto, até o queijo derreter e o interior estar firme.",
    ],
    isSaved: true,
  },
  {
    id: "2",
    title: "Sopa de Tomate",
    time: "12 min",
    difficulty: "Fácil",
    image: sopaTomate,
    ingredients: [
      "4 tomates maduros picados",
      "1 cebola média picada",
      "1 colher (sopa) de azeite",
      "2 xícaras (chá) de água",
      "sal e pimenta a gosto",
      "2 ovos",
      "2 colheres (sopa) de queijo ralado",
    ],
    instructions: [
      "Em uma panela, aqueça o azeite e refogue a cebola até ficar transparente.",
      "Junte os tomates picados, tempere com sal e pimenta e cozinhe até que eles comecem a desmanchar (uns 10 minutos).",
      "Acrescente a água e bata tudo no liquidificador até formar um creme homogêneo. Volte o creme à panela.",
      "Assim que a sopa ferver novamente, quebre os ovos diretamente nela e cozinhe por cerca de 3 a 4 minutos, sem mexer (como ovos pochê).",
      "Ajuste o sal, desligue o fogo e adicione o queijo ralado por cima. Sirva com cheiro-verde ou manjericão fresco.",
    ],
    isSaved: false,
  },
  {
    id: "3",
    title: "Macarrão com Queijo",
    time: "15 min",
    difficulty: "Fácil",
    image: macarraoQueijo,
    ingredients: [
      "200g de macarrão",
      "100g de queijo ralado",
      "1 xícara de leite",
      "2 colheres de manteiga",
      "sal e pimenta a gosto",
    ],
    instructions: [
      "Cozinhe o macarrão conforme instruções da embalagem.",
      "Em uma panela, derreta a manteiga e adicione o leite.",
      "Acrescente o queijo ralado e mexa até derreter.",
      "Misture o macarrão escorrido ao molho de queijo.",
      "Tempere com sal e pimenta a gosto.",
    ],
    isSaved: true,
  },
  {
    id: "4",
    title: "Arroz com Ovo Frito",
    time: "8 min",
    difficulty: "Fácil",
    image: omeleteTurbinado,
    ingredients: [
      "1 xícara de arroz cozido",
      "2 ovos",
      "2 colheres de óleo",
      "sal a gosto",
      "cebolinha picada",
    ],
    instructions: [
      "Aqueça o óleo em uma frigideira em fogo médio-alto.",
      "Quebre os ovos na frigideira e frite até a clara estar firme.",
      "Tempere com sal a gosto.",
      "Sirva os ovos sobre o arroz quente.",
      "Finalize com cebolinha picada.",
    ],
    isSaved: true,
  },
  {
    id: "5",
    title: "Sanduíche Natural",
    time: "5 min",
    difficulty: "Fácil",
    image: macarraoQueijo,
    ingredients: [
      "2 fatias de pão integral",
      "2 fatias de queijo branco",
      "1 tomate fatiado",
      "folhas de alface",
      "1 colher de requeijão",
    ],
    instructions: [
      "Espalhe o requeijão em uma das fatias de pão.",
      "Adicione as fatias de queijo branco.",
      "Coloque o tomate fatiado.",
      "Adicione as folhas de alface.",
      "Feche com a outra fatia de pão e sirva.",
    ],
    isSaved: false,
  },
  {
    id: "6",
    title: "Vitamina de Banana",
    time: "3 min",
    difficulty: "Fácil",
    image: sopaTomate,
    ingredients: [
      "2 bananas maduras",
      "1 copo de leite",
      "2 colheres de aveia",
      "1 colher de mel",
      "gelo a gosto",
    ],
    instructions: [
      "Descasque as bananas e coloque no liquidificador.",
      "Adicione o leite, a aveia e o mel.",
      "Bata até ficar homogêneo.",
      "Adicione gelo se preferir gelado.",
      "Sirva imediatamente.",
    ],
    isSaved: false,
  },
  {
    id: "7",
    title: "Tapioca Simples",
    time: "7 min",
    difficulty: "Fácil",
    image: omeleteTurbinado,
    ingredients: [
      "3 colheres de goma de tapioca",
      "queijo coalho ralado",
      "1 colher de manteiga",
      "sal a gosto",
    ],
    instructions: [
      "Peneire a goma de tapioca em uma frigideira antiaderente.",
      "Espalhe uniformemente e deixe em fogo médio.",
      "Quando começar a soltar, vire com cuidado.",
      "Adicione o queijo e a manteiga.",
      "Dobre ao meio e sirva quente.",
    ],
    isSaved: true,
  },
  {
    id: "8",
    title: "Salada Caesar",
    time: "10 min",
    difficulty: "Médio",
    image: sopaTomate,
    ingredients: [
      "1 pé de alface americana",
      "100g de frango grelhado",
      "croutons",
      "queijo parmesão ralado",
      "molho caesar",
    ],
    instructions: [
      "Lave e rasgue as folhas de alface em pedaços.",
      "Corte o frango grelhado em tiras.",
      "Em uma tigela, misture a alface, o frango e os croutons.",
      "Regue com o molho caesar.",
      "Finalize com queijo parmesão ralado.",
    ],
    isSaved: false,
  },
  {
    id: "9",
    title: "Ovo Mexido Simples",
    time: "6 min",
    difficulty: "Fácil",
    image: omeleteTurbinado,
    ingredients: ["3 ovos", "1 colher de manteiga", "sal e pimenta a gosto"],
    instructions: [
      "Bata os ovos rapidamente com um garfo.",
      "Aqueça a manteiga em fogo médio e despeje os ovos.",
      "Mexa delicadamente até ficarem cremosos.",
      "Tempere a gosto e sirva quente.",
    ],
    isSaved: false,
  },
  {
    id: "10",
    title: "Salada de Tomate e Queijo",
    time: "8 min",
    difficulty: "Fácil",
    image: macarraoQueijo,
    ingredients: ["2 tomates maduros", "100g de queijo fresco", "azeite", "sal"],
    instructions: [
      "Fatie os tomates e o queijo.",
      "Arrume em um prato, regue com azeite e tempere com sal.",
      "Sirva como entrada ou acompanhamento.",
    ],
    isSaved: false,
  },
  {
    id: "11",
    title: "Cebola Caramelizada",
    time: "20 min",
    difficulty: "Médio",
    image: sopaTomate,
    ingredients: ["3 cebolas fatiadas", "2 colheres de manteiga", "1 colher de açúcar", "sal"],
    instructions: [
      "Derreta a manteiga em fogo baixo.",
      "Adicione as cebolas e cozinhe lentamente até dourar.",
      "Polvilhe açúcar e continue cozinhando até caramelizar.",
    ],
    isSaved: false,
  },
  {
    id: "12",
    title: "Panqueca de Queijo",
    time: "12 min",
    difficulty: "Fácil",
    image: macarraoQueijo,
    ingredients: ["1 xícara de farinha", "1 ovo", "1 xícara de leite", "50g de queijo ralado"],
    instructions: [
      "Misture os ingredientes até formar uma massa lisa.",
      "Cozinhe porções na frigideira até dourar dos dois lados.",
      "Polvilhe queijo ralado por cima antes de servir.",
    ],
    isSaved: false,
  },
  {
    id: "13",
    title: "Tomate Recheado",
    time: "25 min",
    difficulty: "Médio",
    image: sopaTomate,
    ingredients: ["4 tomates grandes", "100g de queijo", "cebola picada", "ervas finas"],
    instructions: [
      "Corte a tampa dos tomates e retire o miolo.",
      "Misture queijo, cebola e ervas, recheie os tomates.",
      "Asse em forno médio por 15–20 minutos.",
    ],
    isSaved: false,
  },
];

export const defaultIngredients = ["Tomate", "Cebola", "Queijo", "Ovo"];

export const userProfile = {
  name: "Jonathan",
  email: "jonathan@email.com",
  preferences: {
    culinary: [
      { id: "vegetarian", label: "Vegetariano(a)", enabled: false },
      { id: "glutenFree", label: "Sem Glúten", enabled: false },
      { id: "lactoseFree", label: "Sem Lactose", enabled: false },
    ],
    app: [
      { id: "notifications", label: "Notificações", enabled: true },
      { id: "darkTheme", label: "Tema Escuro", enabled: true },
      { id: "language", label: "Idioma", value: "Português" },
    ],
  },
};
