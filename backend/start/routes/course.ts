import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'CourseController.create')
  Route.get('/', 'CourseController.index')
  Route.delete('/:id', 'CourseController.delete')
})
  .prefix('courses')
