import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Selos de Confiança / Diferenciais TH Fitness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-zinc-900 pb-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Truck className="h-6 w-6 text-zinc-400 stroke-1 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-widest font-semibold">Envio Premium</h4>
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Logística expressa com rastreamento detalhado em tempo real para todo o Brasil.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <RefreshCw className="h-6 w-6 text-zinc-400 stroke-1 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-widest font-semibold">Primeira Troca Grátis</h4>
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Não serviu ou prefere outro modelo? Trocamos sem burocracia em até 30 dias.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-zinc-400 stroke-1 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-widest font-semibold">Compra Segura</h4>
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Dados criptografados com certificado SSL e pagamentos processados com segurança máxima.
              </p>
            </div>
          </div>
        </div>

        {/* Links Principais & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* TH Fitness Marca */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase">TH FITNESS</h3>
            <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
              Sofisticação, alta performance e design minimalista em moda fitness. Criada para quem exige tecnologia de ponta sem abrir mão do estilo.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/thfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Instagram TH Fitness"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Institucionais */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold">Institucional</h4>
            <ul className="space-y-2.5 text-[11px] text-zinc-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tecnologia Emana®</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parcerias e TH Fitness Club</a></li>
            </ul>
          </div>

          {/* Ajuda / SAC */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold">Suporte</h4>
            <ul className="space-y-2.5 text-[11px] text-zinc-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Troca e Devolução</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prazos de Entrega</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold">Newsletter</h4>
            <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
              Inscreva-se para receber convites para lançamentos e acesso antecipado às novas coleções TH Fitness.
            </p>

            {subscribed ? (
              <p className="text-[11px] text-green-400 font-medium animate-fade-in">
                Inscrição realizada com sucesso. Bem-vindo(a) ao universo TH Fitness.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-zinc-800 pb-2">
                <input
                  type="email"
                  placeholder="Seu e-mail de preferência"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs font-light outline-none bg-transparent text-white placeholder-zinc-550"
                  required
                />
                <button
                  type="submit"
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Inscrever-se"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 font-light">
          <div>
            © {new Date().getFullYear()} TH FITNESS. Todos os direitos reservados.
          </div>
          
          {/* Métodos de Pagamento Simulados */}
          <div className="flex gap-2">
            <span className="bg-zinc-900 px-2 py-1 rounded-xs border border-zinc-800 text-[8px] tracking-widest uppercase">Visa</span>
            <span className="bg-zinc-900 px-2 py-1 rounded-xs border border-zinc-800 text-[8px] tracking-widest uppercase">Mastercard</span>
            <span className="bg-zinc-900 px-2 py-1 rounded-xs border border-zinc-800 text-[8px] tracking-widest uppercase">Amex</span>
            <span className="bg-zinc-900 px-2 py-1 rounded-xs border border-zinc-800 text-[8px] tracking-widest uppercase">Pix</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
