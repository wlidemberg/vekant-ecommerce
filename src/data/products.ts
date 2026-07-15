export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tops' | 'leggings' | 'acessorios' | 'colecoes';
  image: string;
  hoverImage: string;
  description: string;
  features: string[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 'legging-sculpt-emana',
    name: 'Legging Sculpt Emana',
    price: 249.90,
    category: 'leggings',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    description: 'A Legging Sculpt Emana é desenvolvida com fio tecnológico Emana® que absorve o calor do corpo e devolve em raios infravermelhos longos, estimulando a microcirculação sanguínea e melhorando a firmeza da pele.',
    features: [
      'Alta compressão com conforto absoluto',
      'Proteção UV 50+ contra raios solares',
      'Cós ultra-alto anatômico (não escorrega)',
      'Tecnologia blackout (zero transparência)'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'top-infinity-sustentacao',
    name: 'Top Infinity Sustentação',
    price: 149.90,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    description: 'Projetado para treinos de alto impacto, o Top Infinity oferece máxima sustentação sem restringir seus movimentos. Possui costas em tiras cruzadas que otimizam a ventilação.',
    features: [
      'Bojo removível inteligente de secagem rápida',
      'Costuras planas anti-atrito',
      'Suporte premium para atividades de alto impacto',
      'Fita elástica macia sob o busto'
    ],
    sizes: ['P', 'M', 'G'],
    isBestSeller: true
  },
  {
    id: 'legging-aura-ribbed',
    name: 'Legging Aura Ribbed',
    price: 229.90,
    category: 'leggings',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    description: 'Combinando textura canelada sofisticada e maciez extrema, a Legging Aura Ribbed é ideal tanto para a prática de yoga e pilates quanto para um visual casual athleisure refinado.',
    features: [
      'Textura canelada tridimensional premium',
      'Elasticidade em 4 direções',
      'Toque macio de segunda pele',
      'Secagem ultrarrápida'
    ],
    sizes: ['P', 'M', 'G'],
    isNew: true
  },
  {
    id: 'top-minimal-seamless',
    name: 'Top Minimal Seamless',
    price: 139.90,
    category: 'tops',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    description: 'Estética clean e conforto sem costuras. O Top Minimal Seamless adapta-se perfeitamente aos contornos do corpo, oferecendo leveza e sensação de liberdade em cada movimento.',
    features: [
      'Tecnologia seamless (sem costuras laterais)',
      'Alças finas reguláveis nas costas',
      'Forro duplo para melhor segurança',
      'Tecido tecnológico biodegradável'
    ],
    sizes: ['P', 'M', 'G'],
    isNew: true
  },
  {
    id: 'shorts-run-breeze',
    name: 'Shorts Run Breeze 2-em-1',
    price: 159.90,
    category: 'leggings',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop',
    description: 'Shorts duplo combinando uma camada externa ultraleve e respirável com um short interno de compressão suave que evita o atrito e possui bolso oculto para celular.',
    features: [
      'Short interno de média compressão integrado',
      'Bolso lateral invisível no short interno',
      'Tecido externo stretch hidrofóbico',
      'Cós em elástico plano com cordão de ajuste interno'
    ],
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 'macacao-fit-sculpt',
    name: 'Macacão Fit Sculpt',
    price: 299.90,
    category: 'colecoes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
    description: 'Macacão fitness feminino com alta sustentação e design anatômico que se ajusta perfeitamente ao corpo, proporcionando total liberdade de movimentos e modelagem premium.',
    features: [
      'Tecido tecnológico de alta compressão',
      'Costas com decote cruzado elegante',
      'Bojo removível',
      'Proteção UV 50+ e zero transparência'
    ],
    sizes: ['P', 'M', 'G'],
    isNew: true
  },
  {
    id: 'bermuda-ciclista-compressao',
    name: 'Bermuda Ciclista Compressão',
    price: 179.90,
    category: 'colecoes',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    description: 'Bermuda de ciclista feminina com cós alto e compressão inteligente. Oferece modelagem perfeita e zero transparência para treinos intensos.',
    features: [
      'Cós alto anatômico modelador',
      'Bolso lateral funcional para celular',
      'Costura reforçada anti-atrito',
      'Secagem rápida e toque gelado'
    ],
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 'garrafa-termica-hydro',
    name: 'Squizee Térmico Hydro TH Fitness',
    price: 119.90,
    category: 'acessorios',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop',
    description: 'Squeeze térmico em aço inoxidável 18/8 de parede dupla com isolamento a vácuo. Mantém suas bebidas geladas por até 24 horas ou quentes por até 12 horas.',
    features: [
      'Pintura eletrostática a pó fosca anti-deslizante',
      'Tampa com bocal anatômico e vedação hermética',
      'Livre de BPA e condensação externa',
      'Capacidade de 650ml'
    ],
    sizes: ['650ml'],
    isBestSeller: true
  },
  {
    id: 'mochila-sport-active',
    name: 'Mochila Sport Active Pack',
    price: 219.90,
    category: 'acessorios',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=600&auto=format&fit=crop',
    description: 'Mochila esportiva feminina resistente à água, com compartimentos específicos para tênis, notebook e itens pessoais. Ideal para o dia a dia ativo.',
    features: [
      'Tecido repelente à água de alta resistência',
      'Compartimento ventilado para calçados',
      'Divisória acolchoada para notebook de até 15.6"',
      'Alças ergonômicas ajustáveis com suporte peitoral'
    ],
    sizes: ['Tamanho Único'],
    isNew: true
  },
  {
    id: 'bolsa-tote-gym',
    name: 'Bolsa Tote TH Fitness Gym',
    price: 189.90,
    category: 'acessorios',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1512201066735-b5a6c810d936?q=80&w=600&auto=format&fit=crop',
    description: 'A parceira perfeita para o dia a dia. Com compartimentos inteligentes para roupas úmidas, calçados e garrafa, esta bolsa combina a estética minimalista da TH Fitness com alta funcionalidade.',
    features: [
      'Tecido oxford impermeável e de alta durabilidade',
      'Compartimento isolado para calçados',
      'Divisória interna impermeável para roupas pós-treino',
      'Alças de ombro reforçadas e ajustáveis'
    ],
    sizes: ['Tamanho Único'],
    isNew: true
  }
];
