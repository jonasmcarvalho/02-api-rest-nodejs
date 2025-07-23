// import { env } from './env'
import { app } from './app'

// Testes

// Unitários: unidade da sua aplicação
// Integração: comunicação entre duas ou mais unidades
// e2e - ponta a ponta: simulam um usuário oprando na nossa aplicação

// front-end: abre a pagina de login, digita o email, clica no botão e testa
// back-end: chamadas HTTP, WebSockets

// Pirâmede de testes: E@E (não dependem de nenuma tecnologia, não dependem de arquitetura)

app
  .listen({
    // port: env.PORT,
    host: 'render' in process.env ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
