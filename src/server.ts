import fastify from 'fastify'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server running on port 3000')
  })
