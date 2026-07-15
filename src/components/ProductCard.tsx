import React, { useState } from 'react';
import type { Product } from '../data/products';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length === 1) {
      onAddToCart(product, product.sizes[0]);
    } else {
      setShowSizeSelector(true);
    }
  };

  const handleSizeSelect = (size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, size);
    setShowSizeSelector(false);
  };

  return (
    <div
      className="group relative flex flex-col justify-between bg-white overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizeSelector(false);
      }}
    >
      {/* Imagem do Produto */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
        
        {/* Badges Premium */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="bg-black text-white text-[9px] uppercase tracking-widest px-2.5 py-1 font-light">
              Novo
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-zinc-200 text-black text-[9px] uppercase tracking-widest px-2.5 py-1 font-light">
              Best Seller
            </span>
          )}
        </div>

        {/* Imagem Principal & Hover */}
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-all duration-700 ease-out scale-100 group-hover:scale-105"
        />

        {/* Quick Add Overlay (Desktop - Hover) */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-6">
          {!showSizeSelector ? (
            <button
              onClick={handleQuickAddClick}
              className="flex items-center justify-center space-x-2 bg-black text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black border border-black transition-colors duration-300 w-11/12 shadow-md cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Adicionar Rápido</span>
            </button>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm p-4 w-11/12 text-center space-y-3 animate-fade-in border border-zinc-200 shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-light block">
                Selecione o tamanho:
              </span>
              <div className="flex justify-center gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleSizeSelect(size, e)}
                    className="h-8 w-8 text-xs font-light border border-zinc-300 hover:border-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Quick Add Button (Fixo no rodapé da imagem para mobile) */}
        <div className="absolute bottom-3 right-3 md:hidden z-20">
          <button
            onClick={handleQuickAddClick}
            className="h-9 w-9 bg-black text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Detalhes do Produto */}
      <div className="pt-4 pb-2 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-sm font-light text-zinc-900 tracking-wide hover:opacity-75 transition-opacity">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-zinc-400 font-light italic uppercase tracking-wider">
            {product.category === 'acessorios' ? 'Acessórios' : product.category === 'colecoes' ? 'Coleções' : product.category}
          </p>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-black">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      {/* Seletor de tamanho modal em mobile (Disparado pelo clique no botão mobile) */}
      {showSizeSelector && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end justify-center md:hidden"
          onClick={() => setShowSizeSelector(false)}
        >
          <div 
            className="bg-white w-full p-6 pb-8 space-y-4 animate-fade-in border-t border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold">{product.name}</span>
              <button 
                onClick={() => setShowSizeSelector(false)}
                className="text-xs text-zinc-400 uppercase tracking-widest hover:text-black"
              >
                Fechar
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-light">Selecione o tamanho para adicionar:</p>
            <div className="flex justify-start gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => handleSizeSelect(size, e)}
                  className="h-10 w-10 text-xs font-light border border-zinc-300 active:border-black active:bg-black active:text-white flex items-center justify-center cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
