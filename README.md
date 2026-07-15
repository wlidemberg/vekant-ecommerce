# Vekant - E-commerce de Moda Fitness Premium

A **Vekant** é uma plataforma moderna e responsiva de e-commerce dedicada exclusivamente à moda fitness premium feminina e acessórios esportivos de alta performance. O projeto foi estruturado com foco em estética minimalista, transições fluidas (micro-animações) e uma experiência de checkout simulada de alta eficiência.

---

## 🚀 Funcionalidades Principais

- **Catálogo Exclusivo Feminino**: Roupas e acessórios categorizados estrategicamente:
  - **Tops**: Suporte e sustentação de alto impacto.
  - **Leggings & Shorts**: Modelagem anatômica com tecnologia blackout.
  - **Macacões & Bermudas**: Peças únicas e modelos ciclistas de média/alta compressão.
  - **Acessórios**: Squeezes térmicos em inox, mochilas e bolsas utilitárias para academia.
- **Design Premium e Responsivo**: Layout limpo, com transições suaves de hover, galeria de imagens dinâmicas (com visualizações alternativas no hover) e estrutura adaptada para qualquer dispositivo (mobile, tablet e desktop) livre de sobreposição de elementos.
- **Sacola de Compras Interativa (Cart Sidebar)**:
  - **Barra de Progresso de Frete Grátis**: Informa visualmente quanto falta para atingir o benefício (regra de frete grátis a partir de R$ 399,00).
  - **Simulador de Frete**: Input com máscara automática de CEP (`00000-000`) para simular prazos e valores de envio (PAC vs. SEDEX). O valor é adicionado em tempo real ao total estimado.
  - **Simulador de Pagamentos**: Permite que o cliente simule compras no **Pix (com 5% de desconto)**, **Cartão de Crédito (em até 10x sem juros)** ou **Boleto Bancário**, atualizando as parcelas e os totais instantaneamente.
  - **Resumo de Confirmação**: Exibe um resumo detalhado e transparente com a forma de pagamento selecionada, prazo de entrega e valores finais aplicados.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

- **React 19** – Biblioteca para construção de interfaces SPA reativas e modulares.
- **TypeScript** – Tipagem estática para maior robustez, autocomplete e prevenção de erros em tempo de desenvolvimento.
- **Vite** – Bundler de última geração com HMR (Hot Module Replacement) ultrarrápido para desenvolvimento ágil.
- **Tailwind CSS** – Framework utilitário de CSS para estilização rápida, consistente e design responsivo fluido.
- **Lucide React** – Conjunto de ícones vetoriais modernos e minimalistas.

---

## 📦 Como Executar o Projeto Localmente

1. **Clone o repositório** (após criar no seu GitHub):
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd vekant-ecommerce
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   *O projeto estará disponível no endereço local: [http://localhost:5173](http://localhost:5173)*

4. **Gere a versão de produção (Build)**:
   ```bash
   npm run build
   ```

---

## 📂 Estrutura do Código

```yaml
src/
├── components/          # Componentes modulares (Header, Hero, ProductGrid, CartSidebar, CareGuide, etc.)
├── data/                # Banco de dados simulado local (produtos estruturados e tipados)
├── assets/              # Elementos estáticos e imagens locais
├── App.tsx              # Componente central e gerenciador de estado do carrinho/filtros
└── main.tsx             # Arquivo de entrada do React
```
