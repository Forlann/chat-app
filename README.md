# Chat app
Desenvolvendo um aplicativo de chat com a implementação de metodologias DevOps.

Interface de chat em tempo real onde vários usuários podem interagir entre si enviando mensagens.

## Definições do Projeto
- Nome do Grupo: DevConnect
- Tema do Grupo: Chat de Mensageria
- Objetivo: Desenvolver uma aplicação de chat estilo Discord, WhatsApp e Telegram.

### Definição de Ferramentas:
- Frontend: React & Tailwind
- Backend: Express.js & Socket.io
- Linguagem: Typescript
- Banco de Dados: SQL/NOSQL
- Hospedagem: Docker
- Planejamento e Gerenciamento: Jira


## Créditos

A ideia deste projeto foi reunida do repositório em [github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Chat-App.md.](https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Chat-App.md)

Como um MVP (Mínimo Produto Viável), você pode se concentrar na construção da interface de chat. A funcionalidade extras pode ser adicionada posteriormente.

## Critérios de Sucesso

Essa aplicação será um sucesso se:

-   [ ] O usuário é solicitado a inserir um nome de usuário quando visita o aplicativo de chat. O nome de usuário será armazenado na aplicação
-   [ ] O usuário poder ver um `campo de entrada` onde pode digitar uma nova mensagem
-   [ ] Ao pressionar a tecla `Enter` ou ao clicar no botão `enviar`, o texto for exibido na `caixa de chat` junto com seu nome de usuário (por exemplo, `John Doe: Olá Mundo!`)
-   [ ] As mensagens serão visíveis para todos os usuários que estão no aplicativo de chat (usando WebSockets)
-   [ ] Quando um novo usuário entra no chat, uma mensagem é exibida para todos os usuários existentes
-   [ ] O usuário pode enviar imagens, vídeos e links que serão exibidos corretamente
-   [ ] O usuário pode selecionar e enviar um emoji

## Funcionalidades Extras

-   [ ] As mensagens são salvas em um banco de dados
-   [ ] Os usuários podem conversar em particular
-   [ ] Os usuários podem ingressar em "canais" sobre tópicos específicos


## Integrantes
- [SCRUM do Projeto](https://techlaby.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog)
- Henrique Diego Sabará Silva [@HenriqueSabara](https://github.com/HenriqueSabara)
- Igor Limaverde do Nascimento [@igorin23](https://github.com/igor23)
- Kauê Forlan Barros de Jesus Souza (Team Leader) [@Forlann](https://github.com/Forlann)

## Bibliografia/Guides

-   [Socket.io](https://socket.io)
-   [Como construir um aplicativo de chat React.js em 10 minutos - artigo](https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b)
-   [Construa um aplicativo de chat como o Slack - Tutorial React / JavaScript - Youtube](https://www.youtube.com/watch?v=a-JKj7m2LIo)
-   [Aplicativo de Chat Socket.io Usando Websockets - Tutorial do Youtube](https://www.youtube.com/watch?v=tHbCkikFfDE)

## Projetos de Exemplo

-   [Chatty2](https://web-chatty.herokuapp.com/)
-   [Aplicativo de chat simples baseado em soquetes TCP](https://github.com/dularish/Simple-TCP-Socket-based-Chat-App)
