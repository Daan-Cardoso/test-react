# Teste Técnico para Desenvolvedor(a) Front-end React

## Descrição

Este teste técnico tem como objetivo avaliar suas habilidades de desenvolvimento Front-end com React. Você deverá criar uma aplicação de listagem de usuários, seguindo os requisitos e diferenciais descritos abaixo.

## Requisitos Obrigatórios

1.  **Listagem de Usuários:**
    * Criar uma página que exiba uma lista de usuários fictícios.
    * Os dados podem ser mockados em um arquivo JSON local ou obtidos de uma API pública como [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
    * Exibir o nome, e-mail e telefone de cada usuário.
2.  **Componente `UserCard`:**
    * Criar um componente reutilizável chamado `UserCard` para exibir as informações de cada usuário.
3.  **Obtenção de Dados:**
    * Utilizar `useEffect` e `fetch` para obter os dados dos usuários.
4.  **Estilização:**
    * Aplicar estilização básica à aplicação utilizando Tailwind CSS.
    * A estilização deve ser responsiva, adaptando-se a diferentes tamanhos de tela.
    * Criar um layout básico para a aplicação, com boa organização visual.

## Diferenciais (Opcionais, mas valorizados)

* **Nível Básico:**
    * Implementar paginação para a lista de usuários.
* **Nível Intermediário:**
    * Criar um modal para visualizar detalhes completos de um usuário ao clicar em um item da lista.
    * Implementar um formulário de criação/edição de usuários utilizando as bibliotecas `react-hook-form` e `zod` para validação de formulário.
* **Nível Avançado:**
    * Utilizar `react-query` para gerenciamento eficiente de requisições à API.
    * Criar um hook customizado chamado `useUsers` para abstrair a lógica de chamada da API de usuários.
    * Implementar testes e2e com Playwright para os principais cenários de uso da aplicação.
    * Implementar autenticação fake para simular um ambiente autenticado.
    * Utilizar `useMemo` e `useCallback` para otimizar a performance da aplicação.

## Instruções de Execução

1.  Faça um fork deste repositório para a sua conta do GitHub.
2.  Clone o fork para a sua máquina local:

    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
    cd nome-do-repo
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Inicie o projeto:

    ```bash
    npm run dev
    ```

    O servidor local será iniciado e a aplicação poderá ser acessada em `http://localhost:3000`.

## Critérios de Avaliação

* **Funcionalidade:** A aplicação atende a todos os requisitos obrigatórios?
* **Qualidade do Código:** O código é limpo, organizado, legível e segue boas práticas de desenvolvimento React?
* **Estilização:** A estilização é agradável, responsiva e utiliza Tailwind CSS de forma eficiente?
* **Testes (se aplicável):** Os testes cobrem os cenários de teste especificados e são implementados de forma adequada?
* **Performance:** A aplicação apresenta bom desempenho e otimizações relevantes?
* **Implementação de Diferenciais:** O candidato implementou diferenciais, demonstrando habilidades adicionais?

## Tempo Estimado

* \[Defina o tempo limite para a realização do teste]

## Observações

* Utilize a versão mais recente do Node.js e npm.
* Sinta-se à vontade para utilizar bibliotecas adicionais, desde que justifique o uso.
* Documente o código de forma clara e concisa.
* Em caso de dúvidas, entre em contato com \[seu contato].

**Boa sorte!**
