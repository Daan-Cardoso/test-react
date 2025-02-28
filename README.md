# Teste para Vaga - React

## Descrição

Este repositório contém um teste para avaliar candidatos para vagas de desenvolvedor React. O objetivo é criar uma aplicação simples de listagem de usuários.

## Requisitos

- Criar uma página que exiba uma lista de usuários fictícios.
- Os dados podem ser mockados em um arquivo JSON ou obtidos de uma API pública como https\://jsonplaceholder.typicode.com/users.
- Exibir nome, e-mail e telefone de cada usuário.
- Criar um componente `UserCard` para exibir cada usuário.
- Utilizar `useEffect` e `fetch` para obter os dados.
- Aplicar estilização básica com Tailwind CSS.

### Diferenciais:

- Implementar paginação.
- Criar um modal para visualizar detalhes de um usuário ao clicar em um item da lista.
- Implementar um formulário de criação/edição de usuários usando `react-hook-form` e `zod`.
- Utilizar `react-query` para gerenciamento de requisições.
- Criar um hook `useUsers` para abstrair a lógica de chamada da API.
- Testes e2e com Playwright.
- Implementação de autenticação fake.
- Utilização do `useMemo` e `useCallback` para otimização.

## Como executar o projeto

1. Faça um fork deste repositório para sua conta do GitHub.
2. Clone o fork para sua máquina local:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o projeto:
   ```sh
   npm run dev
   ```

Isso iniciará o servidor local e o projeto poderá ser acessado em `http://localhost:3000`.

Boa sorte!
