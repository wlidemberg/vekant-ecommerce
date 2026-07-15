import React, { useState } from 'react';
import { RotateCcw, Droplets, Ban, SunDim, Flame, ChevronDown, ChevronUp } from 'lucide-react';

interface CareItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CareGuide: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const careItems: CareItem[] = [
    {
      id: 'avesso',
      title: 'Lave do Avesso',
      shortDesc: 'Protege as fibras e estampas durante a lavagem.',
      fullDesc: 'Ao lavar as peças do avesso, você reduz o atrito direto do tecido tecnológico e das estampas/logos com outras roupas e com o tambor da máquina. Isso previne o surgimento de bolinhas (pilling) e mantém os detalhes e transferências térmicas perfeitos por muito mais tempo.',
      icon: RotateCcw,
    },
    {
      id: 'agua',
      title: 'Água Fria ou Morna',
      shortDesc: 'Preserva as propriedades elásticas do tecido.',
      fullDesc: 'As fibras sintéticas de alta performance (como a poliamida e o elastano) são sensíveis a altas temperaturas. A água quente deforma e enfraquece estas fibras, fazendo com que a peça perca a compressão original. Opte sempre por água fria ou morna (máximo 30°C).',
      icon: Droplets,
    },
    {
      id: 'cloro',
      title: 'Sem Cloro ou Alvejante',
      shortDesc: 'Evita a degradação precoce e manchas.',
      fullDesc: 'O cloro e os alvejantes químicos atacam diretamente o elastano e destroem as fibras elásticas, reduzindo drasticamente a vida útil do seu conjunto Vekant. Além disso, causam manchas e desbotamento acelerado. Use sabão neutro ou suave.',
      icon: Ban,
    },
    {
      id: 'sombra',
      title: 'Seque à Sombra',
      shortDesc: 'Preserva a vivacidade das cores.',
      fullDesc: 'A exposição direta aos raios solares UV acelera a degradação química do elastano e desbota os pigmentos de cor (especialmente os tons escuros de cinza e preto premium). Secar à sombra em local ventilado é a melhor maneira de manter o aspecto de novo.',
      icon: SunDim,
    },
    {
      id: 'calor',
      title: 'Evite Secadora e Ferro',
      shortDesc: 'Protege contra danos térmicos irreversíveis.',
      fullDesc: 'O calor extremo da secadora encolhe o tecido e danifica o elastano, tirando a elasticidade da peça. Já o ferro de passar pode derreter ou queimar as fibras de poliamida. Os tecidos Vekant possuem tecnologia de secagem rápida e não amassam.',
      icon: Flame,
    },
  ];

  const toggleItem = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <section className="py-20 bg-zinc-50 border-t border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-light block">
            Guia de Durabilidade
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-black">
            Manual de Cuidados Vekant
          </h2>
          <p className="text-xs md:text-sm text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
            Nossos tecidos são tecnológicos e de altíssima qualidade. Siga este manual simples para preservar a performance e a elegância de suas peças por anos.
          </p>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
        </div>

        {/* Grid de Cuidados */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {careItems.map((item) => {
            const Icon = item.icon;
            const isOpen = activeItem === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`bg-white border transition-all duration-300 p-6 md:p-8 flex flex-col justify-between cursor-pointer select-none group relative overflow-hidden ${
                  isOpen 
                    ? 'border-black ring-1 ring-black shadow-lg md:scale-105 z-10' 
                    : 'border-zinc-200 hover:border-zinc-400 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Ícone Minimalista */}
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-600 group-hover:bg-black group-hover:text-white'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Título e Descrição Curta */}
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Botão de Expansão (Mobile) */}
                <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] uppercase tracking-wider text-zinc-400 font-medium group-hover:text-black">
                  <span>{isOpen ? 'Esconder detalhes' : 'Ler porquê'}</span>
                  {isOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </div>

                {/* Conteúdo Detalhado para Telas Pequenas/Card Expandido */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-600 font-light leading-relaxed animate-fade-in md:absolute md:top-full md:left-0 md:w-full md:bg-white md:border md:border-black md:p-6 md:shadow-2xl md:mt-1">
                    <p>{item.fullDesc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dica Extra Premium */}
        <div className="bg-white border border-zinc-200 p-6 max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-zinc-400">
            Fio Inteligente Emana & Lycra
          </span>
          <p className="text-xs text-zinc-600 font-light leading-relaxed">
            As peças Vekant não necessitam de ferro de passar. Pendurar a roupa úmida em um cabide à sombra fará com que ela seque naturalmente lisa e pronta para o uso.
          </p>
        </div>

      </div>
    </section>
  );
};
