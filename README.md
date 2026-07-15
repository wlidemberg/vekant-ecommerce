# Vekant - E-commerce de Moda Fitness Premium

Este projeto de e-commerce foi **desenvolvido por mim utilizando técnicas avançadas de design responsivo**, garantindo uma navegação fluida, intuitiva e esteticamente premium em qualquer tamanho de tela (mobile, tablets e desktops). A **Vekant** é uma plataforma dedicada exclusivamente à moda fitness feminina e acessórios esportivos de alta performance.

---

## 🎨 Soluções de Design Responsivo Aplicadas

- **Layout Fluido e Flexbox/Grid**: Utilização de CSS Grid e Flexbox para que o catálogo de produtos e os elementos de interface se adaptem perfeitamente ao viewport do dispositivo, reordenando-se de forma natural e sem quebras de layout.
- **Prevenção de Colisões no Header**: Estruturação de cabeçalho responsivo que oculta dinamicamente o menu principal em telas menores (movendo-o para um menu hambúrguer com Drawer lateral) e reorganiza os elementos flexíveis no desktop para evitar a sobreposição de menus com a marca central.
- **Sacola de Compras Adaptativa (Drawer)**: Sacola lateral interativa projetada para preencher 100% da tela em dispositivos móveis ou manter-se como painel elegante à direita em telas maiores, com áreas internas de rolagem isolada para facilitar a navegação em telas de toque.

---

## 🚀 Funcionalidades Principais

- **Catálogo Exclusivo Feminino**: Organizado estrategicamente em categorias:
  - **Tops**: Alta sustentação e design esportivo premium.
  - **Leggings & Shorts**: Tecnologia blackout e tecidos tecnológicos para máximo conforto.
  - **Macacões & Bermudas**: Peças únicas de modelagem anatômica e bermudas estilo ciclista.
  - **Acessórios**: Squeezes térmicos em inox, mochilas e bolsas utilitárias para academia.
- **Galeria com Efeito Hover**: Exibição interativa que revela detalhes da peça com imagens alternativas ao passar o mouse.
- **Sacola Interativa com Simuladores**:
  - **Barra de Progresso para Frete Grátis**: Calcula dinamicamente o valor restante para atingir o benefício (frete grátis acima de R$ 399,00).
  - **Simulador de Frete**: Input de CEP que calcula e adiciona instantaneamente o valor de envio (opções PAC e SEDEX) ao total geral.
  - **Simulador de Formas de Pagamento**: Atualiza os totais e parcelas dinamicamente com base nas opções selecionadas (**Pix com 5% de desconto**, **Cartão de Crédito em até 10x sem juros** ou **Boleto Bancário**).
  - **Confirmação Detalhada**: Tela de sucesso que exibe o resumo completo da simulação de compra realizada (forma de pagamento, prazo estimado de entrega e total pago).

---

## 🛠️ Tecnologias Utilizadas

- **React 19** – Para construção de interfaces dinâmicas em componentes modulares.
- **TypeScript** – Garantia de tipagem estática e segurança do código em tempo de execução.
- **Vite** – Bundler de última geração com inicialização e HMR instantâneos.
- **Tailwind CSS** – Framework utilitário de CSS focado em design eficiente e responsivo.
- **Lucide React** – Conjunto de ícones vetoriais modernos e minimalistas.

---

## 📦 Como Executar o Projeto Localmente

1. **Clone o repositório**:
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
