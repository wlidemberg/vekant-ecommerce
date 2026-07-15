import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Truck, Receipt } from 'lucide-react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, change: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Estados para simulação de frete
  const [cep, setCep] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [selectedShippingOption, setSelectedShippingOption] = useState<'pac' | 'sedex' | 'free' | null>(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingDays, setShippingDays] = useState(0);

  // Estado para simulação de forma de pagamento
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');

  // Calcula o subtotal do carrinho
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Regra de Frete Grátis: R$ 399,00
  const freeShippingThreshold = 399.00;
  const missingForFreeShipping = freeShippingThreshold - subtotal;
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  // Se o carrinho mudar e ficar vazio, reseta os cálculos de frete
  useEffect(() => {
    if (cartItems.length === 0) {
      setShippingCalculated(false);
      setSelectedShippingOption(null);
      setShippingCost(0);
      setShippingDays(0);
    } else if (subtotal >= freeShippingThreshold) {
      setSelectedShippingOption('free');
      setShippingCost(0);
      setShippingDays(3); // Prazo padrão do frete grátis premium
      setShippingCalculated(true);
    } else if (selectedShippingOption === 'free') {
      setSelectedShippingOption(null);
      setShippingCost(0);
      setShippingDays(0);
      setShippingCalculated(false);
    }
  }, [subtotal, cartItems.length, selectedShippingOption]);

  const handleCalculateShipping = () => {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length === 8) {
      setShippingCalculated(true);
      if (subtotal >= freeShippingThreshold) {
        setSelectedShippingOption('free');
        setShippingCost(0);
        setShippingDays(3);
      } else {
        // Pré-seleciona PAC por padrão
        setSelectedShippingOption('pac');
        setShippingCost(15.90);
        setShippingDays(8);
      }
    } else {
      alert('Por favor, insira um CEP válido de 8 dígitos.');
    }
  };

  const handleSelectShipping = (option: 'pac' | 'sedex', cost: number, days: number) => {
    setSelectedShippingOption(option);
    setShippingCost(cost);
    setShippingDays(days);
  };

  // Preço Total com frete
  const totalWithShipping = subtotal + shippingCost;

  const handleCheckout = () => {
    setIsCheckoutLoading(true);
    // Simula uma requisição de checkout de e-commerce premium
    setTimeout(() => {
      setIsCheckoutLoading(false);
      setCheckoutSuccess(true);
    }, 2000);
  };

  const handleResetCheckout = () => {
    setCheckoutSuccess(false);
    onClose();
    // Limpar o carrinho (simulado por recarregamento)
    window.location.reload();
  };

  return (
    <>
      {/* Backdrop (Fundo escuro translúcido com blur) */}
      <div
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Painel do Carrinho Lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white text-black z-50 shadow-2xl flex flex-col justify-between transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Cabeçalho do Carrinho */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Sacola</span>
            <span className="text-xs bg-zinc-100 px-2 py-0.5 font-light text-zinc-600">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sucesso no Checkout (Tela de Sucesso) */}
        {checkoutSuccess ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6 overflow-y-auto animate-fade-in font-sans">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="space-y-2 w-full">
              <h3 className="text-lg font-medium uppercase tracking-widest text-black">Pedido Confirmado!</h3>
              <p className="text-xs text-zinc-500 font-light max-w-xs mx-auto">
                Parabéns pela sua escolha. Seu pedido de simulação na **Vekant** está sendo processado.
              </p>
              
              {/* Detalhes da Compra Simulada */}
              <div className="bg-zinc-50 border border-zinc-200 p-4 text-left text-xs text-zinc-700 space-y-2.5 rounded-sm my-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold border-b border-zinc-200 pb-1.5 flex items-center gap-1.5">
                  <Receipt className="h-3.5 w-3.5" /> Resumo do Pedido Simulado
                </p>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete ({selectedShippingOption === 'free' ? 'Grátis' : selectedShippingOption?.toUpperCase()})</span>
                  <span>{shippingCost === 0 ? 'Grátis' : `R$ ${shippingCost.toFixed(2).replace('.', ',')}`}</span>
                </div>
                <div className="flex justify-between font-semibold text-black pt-1.5 border-t border-zinc-200">
                  <span>Total Geral</span>
                  <span>R$ {totalWithShipping.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="pt-2 border-t border-dashed border-zinc-200 text-[11px] space-y-1">
                  <p>Forma de Pagamento: <strong className="text-black font-semibold uppercase">{paymentMethod === 'pix' ? 'Pix (5% desc.)' : paymentMethod === 'credit' ? 'Cartão de Crédito' : 'Boleto'}</strong></p>
                  {paymentMethod === 'pix' && (
                    <p>Total Pago no Pix: <strong className="text-green-600 font-semibold">R$ {(totalWithShipping * 0.95).toFixed(2).replace('.', ',')}</strong></p>
                  )}
                  {paymentMethod === 'credit' && (
                    <p>Parcelamento: <strong className="text-black font-semibold">10x de R$ {(totalWithShipping / 10).toFixed(2).replace('.', ',')} sem juros</strong></p>
                  )}
                  {shippingCalculated && (
                    <p>Prazo de Entrega Estimado: <strong className="text-black font-semibold">{shippingDays} dias úteis</strong></p>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleResetCheckout}
              className="w-full bg-black text-white text-xs uppercase tracking-widest py-4 hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              Voltar ao Início
            </button>
          </div>
        ) : (
          <>
            {/* Lista de Produtos (Meio) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Barra de Progresso do Frete Grátis */}
              {cartItems.length > 0 && (
                <div className="bg-zinc-50 p-4 border border-zinc-150 space-y-2">
                  <div className="text-[11px] font-light uppercase tracking-wider text-zinc-600">
                    {missingForFreeShipping > 0 ? (
                      <span>
                        Faltam <span className="font-semibold text-black">R$ {missingForFreeShipping.toFixed(2).replace('.', ',')}</span> para garantir <span className="font-semibold text-black">Frete Grátis</span>!
                      </span>
                    ) : (
                      <span className="text-green-600 font-medium">Você ganhou Frete Grátis! 🎉</span>
                    )}
                  </div>
                  <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black transition-all duration-500"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <ShoppingBag className="h-10 w-10 text-zinc-300 stroke-1" />
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-light">Sua sacola está vazia</p>
                  <button
                    onClick={onClose}
                    className="border border-black text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-black hover:text-white transition-colors cursor-pointer font-light"
                  >
                    Voltar a Comprar
                  </button>
                </div>
              ) : (
                <>
                  {/* Lista de Itens */}
                  <div className="space-y-4 divide-y divide-zinc-100">
                    {cartItems.map((item, index) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className={`flex gap-4 py-4 ${index === 0 ? 'pt-0' : ''} animate-fade-in`}
                      >
                        {/* Imagem em Miniatura */}
                        <div className="w-20 aspect-[3/4] bg-zinc-100 overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Informações e Controles */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-xs tracking-wide font-light text-zinc-900 pr-2">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.product.id, item.size)}
                                className="text-zinc-400 hover:text-black transition-colors cursor-pointer p-0.5"
                                aria-label="Remover item"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="text-[10px] text-zinc-400 font-light uppercase tracking-widest">
                              Tamanho: {item.size}
                            </p>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            {/* Controles de Quantidade */}
                            <div className="flex items-center border border-zinc-200 rounded-sm">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                                className="h-7 w-7 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-zinc-50 transition-colors cursor-pointer"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-light select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                                className="h-7 w-7 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-zinc-50 transition-colors cursor-pointer"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Preço Total do Item */}
                            <span className="text-xs font-medium text-black">
                              R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simulador de Frete */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-black flex items-center gap-1.5">
                      <Truck className="h-4 w-4" /> Calcular Frete
                    </h4>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ex: 01310-100"
                        value={cep}
                        onChange={(e) => setCep(e.target.value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2').substring(0, 9))}
                        className="flex-1 text-xs border border-zinc-200 px-3 py-2 outline-none focus:border-black font-light text-black placeholder-zinc-400 bg-white"
                      />
                      <button
                        onClick={handleCalculateShipping}
                        className="bg-black text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Calcular
                      </button>
                    </div>
                    {shippingCalculated && (
                      <div className="space-y-2 animate-fade-in pt-1">
                        {subtotal >= freeShippingThreshold ? (
                          <div className="p-3 bg-green-50 border border-green-200 text-[11px] text-green-700 font-light flex items-center justify-between">
                            <span>Frete Premium Grátis</span>
                            <span className="font-semibold">3 dias úteis</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <label className="flex items-center justify-between p-3 border border-zinc-200 cursor-pointer hover:border-black transition-colors rounded-sm bg-zinc-50">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  name="shipping"
                                  checked={selectedShippingOption === 'pac'}
                                  onChange={() => handleSelectShipping('pac', 15.90, 8)}
                                  className="accent-black h-3.5 w-3.5"
                                />
                                <span className="text-[11px] text-zinc-800 font-light">PAC (7 a 10 dias úteis)</span>
                              </div>
                              <span className="text-xs font-semibold text-black">R$ 15,90</span>
                            </label>
                            <label className="flex items-center justify-between p-3 border border-zinc-200 cursor-pointer hover:border-black transition-colors rounded-sm bg-zinc-50">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  name="shipping"
                                  checked={selectedShippingOption === 'sedex'}
                                  onChange={() => handleSelectShipping('sedex', 29.90, 3)}
                                  className="accent-black h-3.5 w-3.5"
                                />
                                <span className="text-[11px] text-zinc-800 font-light">SEDEX (2 a 4 dias úteis)</span>
                              </div>
                              <span className="text-xs font-semibold text-black">R$ 29,90</span>
                            </label>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Simulador de Formas de Pagamento */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-black flex items-center gap-1.5">
                      <CreditCard className="h-4 w-4" /> Forma de Pagamento
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setPaymentMethod('pix')}
                        className={`py-2 text-[10px] uppercase tracking-wider border text-center transition-colors cursor-pointer rounded-xs ${
                          paymentMethod === 'pix' ? 'border-black bg-black text-white font-medium' : 'border-zinc-200 hover:border-black font-light text-zinc-650'
                        }`}
                      >
                        Pix (-5%)
                      </button>
                      <button
                        onClick={() => setPaymentMethod('credit')}
                        className={`py-2 text-[10px] uppercase tracking-wider border text-center transition-colors cursor-pointer rounded-xs ${
                          paymentMethod === 'credit' ? 'border-black bg-black text-white font-medium' : 'border-zinc-200 hover:border-black font-light text-zinc-650'
                        }`}
                      >
                        Cartão
                      </button>
                      <button
                        onClick={() => setPaymentMethod('boleto')}
                        className={`py-2 text-[10px] uppercase tracking-wider border text-center transition-colors cursor-pointer rounded-xs ${
                          paymentMethod === 'boleto' ? 'border-black bg-black text-white font-medium' : 'border-zinc-200 hover:border-black font-light text-zinc-650'
                        }`}
                      >
                        Boleto
                      </button>
                    </div>

                    <div className="p-3 bg-zinc-50 border border-zinc-150 text-[11px] text-zinc-600 font-light space-y-1 rounded-sm">
                      {paymentMethod === 'pix' && (
                        <div>
                          <p className="text-black font-semibold">Pix com 5% de desconto:</p>
                          <p className="text-xs text-green-600 font-bold">R$ {((subtotal + shippingCost) * 0.95).toFixed(2).replace('.', ',')}</p>
                          <p className="text-[9px] text-zinc-400 mt-1">Aprovação imediata e envio prioritário.</p>
                        </div>
                      )}
                      {paymentMethod === 'credit' && (
                        <div>
                          <p className="text-black font-semibold">Cartão de Crédito:</p>
                          <p className="text-xs text-black font-bold">Até 10x de R$ {((subtotal + shippingCost) / 10).toFixed(2).replace('.', ',')} sem juros</p>
                          <p className="text-[9px] text-zinc-400 mt-1">Aceitamos Visa, Mastercard, Amex e Elo.</p>
                        </div>
                      )}
                      {paymentMethod === 'boleto' && (
                        <div>
                          <p className="text-black font-semibold">Boleto Bancário:</p>
                          <p className="text-xs text-black font-bold">R$ {(subtotal + shippingCost).toFixed(2).replace('.', ',')}</p>
                          <p className="text-[9px] text-zinc-400 mt-1">Vencimento em 1 dia útil. Processamento em até 48h.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Rodapé do Carrinho (Resumo e Checkout) */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-zinc-100 bg-zinc-50 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-zinc-500 font-light uppercase tracking-wider">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 font-light uppercase tracking-wider">
                    <span>Envio</span>
                    <span>
                      {shippingCost === 0 
                        ? (subtotal >= freeShippingThreshold || selectedShippingOption === 'free' ? 'Grátis' : 'Calcular frete') 
                        : `R$ ${shippingCost.toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-zinc-200">
                    <span className="uppercase tracking-widest text-black">Total Estimado</span>
                    <span className="text-black">R$ {totalWithShipping.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckoutLoading}
                    className="w-full bg-black text-white hover:bg-zinc-900 text-xs uppercase tracking-[0.2em] py-4 font-medium transition-all duration-300 flex items-center justify-center space-x-2.5 disabled:opacity-50 cursor-pointer"
                  >
                    {isCheckoutLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processando...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4" />
                        <span>Finalizar Compra</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </>
  );
};
