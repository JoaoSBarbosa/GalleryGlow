# Galeria de Imagens

Este é um projeto de uma galeria de imagens simples, desenvolvido em React com Next.js e TypeScript. O objetivo é exibir uma galeria de imagens onde, ao clicar em uma imagem, ela é exibida em tela cheia, em um modal.

## Funcionalidades

- Exibir uma galeria de imagens.
- Ao clicar em uma imagem, exibi-la em tela cheia em um modal.
- Navegar entre as imagens no modal.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Como executar o projeto

1. Clone este repositório em sua máquina local:

```
bashCopy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

1. Navegue até o diretório do projeto:

```
arduinoCopy code
cd nome-do-repositorio
```

1. Instale as dependências do projeto:

```
Copy code
npm install
```

1. Inicie o servidor de desenvolvimento:

```
arduinoCopy code
npm run dev
```

1. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Estrutura do projeto

- `src/app/page.tsx`: Página inicial do projeto que exibe a galeria de imagens.

## Como funciona

- Ao clicar em uma imagem, o componente `ImageModal` é ativado, exibindo a imagem em tela cheia.
- O `ImageModal` permite a navegação entre as imagens usando botões de avançar e voltar.
- Ao fechar o modal, o usuário retorna à galeria de imagens.

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades. Divirta-se!
