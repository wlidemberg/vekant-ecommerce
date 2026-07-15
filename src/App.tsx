import { useState } from 'react';
import { products, type Product } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { CareGuide } from './components/CareGuide';
import { CartSidebar, type CartItem } from './components/CartSidebar';
import { Footer } from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'tops' | 'leggings' | 'acessorios' | 'colecoes'>('todos');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Manipulador para adicionar produtos ao carrinho
  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      // Verifica se o item com o mesmo ID e tamanho já existe no carrinho
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex > -1) {
        // Se existe, apenas aumenta a quantidade
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        // Se não existe, adiciona o novo item
        return [...prevItems, { product, size, quantity: 1 }];
      }
    });

    // Abre o carrinho lateral automaticamente para dar feedback instantâneo ao usuário
    setIsCartOpen(true);
  };

  // Manipulador para atualizar quantidades no carrinho
  const handleUpdateQuantity = (productId: string, size: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQuantity = item.quantity + change;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove o item se a quantidade chegar a 0
    );
  };

  // Manipulador para remover itens do carrinho
  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  // Função para rolar suavemente até a seção de produtos
  const handleExploreClick = () => {
    const productGridSection = document.getElementById('products-section');
    if (productGridSection) {
      productGridSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Total de itens na sacola
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Cabeçalho */}
      <Header
        cartItemsCount={cartItemsCount}
        onCartOpen={() => setIsCartOpen(true)}
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Destaque Principal */}
      <Hero onExploreClick={handleExploreClick} />

      {/* Grid de Produtos */}
      <main className="flex-grow">
        <ProductGrid
          products={products}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={handleAddToCart}
        />

        {/* Manual de Cuidados */}
        <CareGuide />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Carrinho Lateral */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
