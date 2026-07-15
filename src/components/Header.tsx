import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
  onCategoryChange: (category: 'todos' | 'tops' | 'leggings' | 'acessorios' | 'colecoes') => void;
  activeCategory: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartOpen,
  onCategoryChange,
  activeCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Efeito para adicionar fundo no header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (category: 'todos' | 'tops' | 'leggings' | 'acessorios' | 'colecoes') => {
    onCategoryChange(category);
    setIsMobileMenuOpen(false);
    
    // Rola suavemente até o grid de produtos
    const productGridSection = document.getElementById('products-section');
    if (productGridSection) {
      productGridSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barra de Anúncios Premium */}
      <div className="w-full bg-black text-white text-[10px] uppercase tracking-[0.25em] py-2.5 text-center font-light z-50 relative select-none">
        Frete grátis para todo o Brasil em compras acima de R$ 399
      </div>

      {/* Header Principal */}
      <header
        className={`fixed top-[37px] left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 text-black backdrop-blur-md border-b border-zinc-150 py-4 shadow-sm'
            : 'bg-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-1 hover:opacity-75 transition-opacity cursor-pointer flex-shrink-0"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Navegação Desktop (Esquerda) */}
          <nav className="hidden md:flex flex-1 items-center space-x-6 text-[10px] lg:text-[11px] lg:space-x-8 uppercase tracking-[0.15em] lg:tracking-[0.2em] font-light">
            <button
              onClick={() => handleNavClick('todos')}
              className={`hover:opacity-100 transition-opacity cursor-pointer ${
                activeCategory === 'todos' ? 'font-medium opacity-100 border-b border-current pb-0.5' : 'opacity-70'
              }`}
            >
              Ver Tudo
            </button>
            <button
              onClick={() => handleNavClick('colecoes')}
              className={`hover:opacity-100 transition-opacity cursor-pointer ${
                activeCategory === 'colecoes' ? 'font-medium opacity-100 border-b border-current pb-0.5' : 'opacity-70'
              }`}
            >
              Macacões & Bermudas
            </button>
            <button
              onClick={() => handleNavClick('tops')}
              className={`hover:opacity-100 transition-opacity cursor-pointer ${
                activeCategory === 'tops' ? 'font-medium opacity-100 border-b border-current pb-0.5' : 'opacity-70'
              }`}
            >
              Tops
            </button>
            <button
              onClick={() => handleNavClick('leggings')}
              className={`hover:opacity-100 transition-opacity cursor-pointer ${
                activeCategory === 'leggings' ? 'font-medium opacity-100 border-b border-current pb-0.5' : 'opacity-70'
              }`}
            >
              Leggings & Shorts
            </button>
            <button
              onClick={() => handleNavClick('acessorios')}
              className={`hover:opacity-100 transition-opacity cursor-pointer ${
                activeCategory === 'acessorios' ? 'font-medium opacity-100 border-b border-current pb-0.5' : 'opacity-70'
              }`}
            >
              Acessórios
            </button>
          </nav>

          {/* Logo Central (Absoluto no mobile para centralizar, estático no desktop para prevenir sobreposições) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mx-6 flex-shrink-0 text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onCategoryChange('todos');
              }}
              className="text-lg md:text-xl font-bold tracking-[0.35em] uppercase select-none transition-opacity hover:opacity-85"
            >
              VEKANT
            </a>
          </div>

          {/* Ícones de Ação (Direita) */}
          <div className="flex-1 flex justify-end items-center space-x-4 lg:space-x-6">
            {/* Pesquisa */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 hover:opacity-75 transition-opacity cursor-pointer"
              aria-label="Buscar produto"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            {/* Conta (Simulada) */}
            <button
              onClick={() => alert('Área do Cliente (Simulada) - Vekant Club')}
              className="hidden sm:block p-1 hover:opacity-75 transition-opacity cursor-pointer"
              aria-label="Minha conta"
            >
              <User className="h-4.5 w-4.5" />
            </button>

            {/* Carrinho */}
            <button
              onClick={onCartOpen}
              className="p-1 hover:opacity-75 transition-opacity relative cursor-pointer"
              aria-label="Abrir carrinho"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] font-semibold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Menu Lateral Mobile (Drawer) */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-white text-black p-6 space-y-8 flex flex-col justify-between transition-transform duration-300 ease-out shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.2em] uppercase">VEKANT</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-xs uppercase tracking-[0.25em] font-light pt-6">
              <button
                onClick={() => handleNavClick('todos')}
                className={`text-left py-2 border-b border-zinc-100 ${activeCategory === 'todos' ? 'font-medium' : ''}`}
              >
                Ver Tudo
              </button>
              <button
                onClick={() => handleNavClick('colecoes')}
                className={`text-left py-2 border-b border-zinc-100 ${activeCategory === 'colecoes' ? 'font-medium' : ''}`}
              >
                Macacões & Bermudas
              </button>
              <button
                onClick={() => handleNavClick('tops')}
                className={`text-left py-2 border-b border-zinc-100 ${activeCategory === 'tops' ? 'font-medium' : ''}`}
              >
                Tops
              </button>
              <button
                onClick={() => handleNavClick('leggings')}
                className={`text-left py-2 border-b border-zinc-100 ${activeCategory === 'leggings' ? 'font-medium' : ''}`}
              >
                Leggings & Shorts
              </button>
              <button
                onClick={() => handleNavClick('acessorios')}
                className={`text-left py-2 border-b border-zinc-100 ${activeCategory === 'acessorios' ? 'font-medium' : ''}`}
              >
                Acessórios
              </button>
            </nav>
          </div>

          <div className="space-y-4 border-t border-zinc-100 pt-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                alert('Área do Cliente (Simulada)');
              }}
              className="flex items-center space-x-3 text-xs uppercase tracking-widest font-light"
            >
              <User className="h-4 w-4" />
              <span>Minha Conta</span>
            </button>
            <div className="text-[10px] text-zinc-400 font-light pt-2">
              © Vekant Moda Fitness
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Pesquisa Minimalista */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300 flex items-start justify-center pt-24 px-4 ${
          isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className={`bg-white text-black w-full max-w-2xl p-6 md:p-8 shadow-2xl relative transform transition-all duration-300 ${
            isSearchOpen ? 'translate-y-0 scale-100' : '-translate-y-12 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-4 right-4 p-1.5 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <h3 className="text-xs uppercase tracking-[0.25em] font-light text-zinc-400 mb-4">O que você está procurando?</h3>
          <div className="relative flex items-center border-b border-black pb-2">
            <input
              type="text"
              placeholder="Digite sua busca... (ex: legging, top, garrafa)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-base font-light outline-none bg-transparent"
              autoFocus={isSearchOpen}
            />
            <Search className="h-5 w-5 text-zinc-400" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider py-1">Buscas populares:</span>
            <button
              onClick={() => setSearchQuery('Legging Sculpt')}
              className="text-[10px] uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 px-3 py-1 font-light"
            >
              Legging Sculpt
            </button>
            <button
              onClick={() => setSearchQuery('Top Infinity')}
              className="text-[10px] uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 px-3 py-1 font-light"
            >
              Top Infinity
            </button>
            <button
              onClick={() => setSearchQuery('Garrafa Térmica')}
              className="text-[10px] uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 px-3 py-1 font-light"
            >
              Garrafa
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
