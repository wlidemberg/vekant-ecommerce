import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Imagem de fundo com overlay escuro para contraste premium */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop"
          alt="Vekant Lifestyle Fitness"
          className="h-full w-full object-cover object-center opacity-65 scale-105 animate-[pulse_8s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white space-y-8 select-none">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium block animate-[fadeIn_1s_ease-out]">
            Alta Performance & Sofisticação
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight md:leading-none text-white animate-[fadeIn_1.2s_ease-out]">
            Moda fitness com design,<br />
            <span className="font-normal font-sans italic text-zinc-300">leveza</span> e alta performance.
          </h1>
        </div>

        <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed tracking-wide animate-[fadeIn_1.4s_ease-out]">
          Roupas desportivas projetadas com tecidos tecnológicos premium que garantem compressão inteligente, respiração e durabilidade extraordinária.
        </p>

        <div className="pt-4 animate-[fadeIn_1.6s_ease-out]">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-500">Explorar Coleção</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-500 ease-out z-0" />
          </button>
        </div>
      </div>

      {/* Indicador de Scroll Minimalista */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-65 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-zinc-500" />
      </div>
    </section>
  );
};
