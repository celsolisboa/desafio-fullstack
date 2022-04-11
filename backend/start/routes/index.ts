import Route from '@ioc:Adonis/Core/Route'

// API routes
Route.group(() => {
  require('./course')
})
  .prefix('/api')