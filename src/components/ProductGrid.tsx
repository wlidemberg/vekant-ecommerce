import React from 'react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (category: 'todos' | 'tops' | 'leggings' | 'acessorios' | 'colecoes') => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  onAddToCart,
}) => {
  // Filtrar os produtos dinamicamente com base na categoria ativa
  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter((product) => product.category === activeCategory);

  const categories: { id: 'todos' | 'tops' | 'leggings' | 'acessorios' | 'colecoes'; label: string }[] = [
    { id: 'todos', label: 'Ver Tudo' },
    { id: 'colecoes', label: 'Macacões & Bermudas' },
    { id: 'tops', label: 'Tops' },
    { id: 'leggings', label: 'Leggings & Shorts' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  return (
    <section id="products-section" className="py-20 bg-white max-w-7xl mx-auto px-6 space-y-12">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center space-y-3">
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-light block">
          Catálogo Exclusivo
        </span>
        <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
          Nossas Peças
        </h2>
        <div className="w-12 h-[1px] bg-black mx-auto mt-2" />
      </div>

      {/* Barra de Filtros Minimalista */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 border-b border-zinc-100 pb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`text-xs uppercase tracking-widest py-2 px-4 transition-all duration-300 cursor-pointer ${
              activeCategory === category.id
                ? 'bg-black text-white font-medium'
                : 'text-zinc-500 hover:text-black font-light bg-zinc-50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-500">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-200">
          <p className="text-zinc-400 text-sm font-light uppercase tracking-wider">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
      
    </section>
  );
};
