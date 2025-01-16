# Shoppe Cart - Carrinho de Compras Simples

Este projeto é um carrinho de compras simples inspirado no estilo da Shoppe. Foi desenvolvido em Node.js com o objetivo de treinar lógica de programação e manipulação de arrays.

## Funcionalidades

O carrinho de compras possui as seguintes ações:

1. **Adicionar Item**:
   - Permite adicionar um item ao carrinho.
   - Cada item possui propriedades como nome, preço, quantidade e subtotal.

2. **Calcular Total**:
   - Calcula o valor total dos itens presentes no carrinho, considerando suas quantidades e preços.

3. **Deletar Item**:
   - Remove um item específico do carrinho com base no nome do produto.

4. **Remover Item**:
   - Remove uma unidade de um item específico do carrinho.
   - Se a quantidade for 1, o item é completamente removido do carrinho.

5. **Exibir Carrinho**:
   - Mostra a lista completa de itens no carrinho, incluindo detalhes como nome, preço, quantidade e subtotal de cada item.
   
   ## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd shoppe-cart
   ```
3. Instale as dependências (se necessário):
   ```bash
   npm install
   ```
4. Execute o código:
   ```bash
   node index.js
   ```