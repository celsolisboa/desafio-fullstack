const app = require('./../../src/api/')
const request = require('supertest')(app)

describe('Courses testing', () => {
  test('get to /courses should return as expected', async done => {
    const response = await request.get('/courses')
    expect(response.body).toEqual([
      {
        id: '510f6df2-0fb4-58a5-93eb-cb6fc18c9221',
        name: 'Biologia',
        teachers: 'Afonso,Leandro',
        rooms: 'B1,B2',
        start_at: '08:00:00',
        end_at: '10:00:00',
        created_at: expect.any(String),
        disabled: false
      },
      {
        id: 'c26550e7-3629-5ba0-97a3-c96de4000227',
        name: 'Gestão',
        teachers: 'Maria,Gabriela',
        rooms: 'G1,G2',
        start_at: '08:00:00',
        end_at: '10:00:00',
        created_at: expect.any(String),
        disabled: false
      }
    ])
    done()
  })

  test('get to /courses/:id should return course as expected', async done => {
    const response = await request.get('/courses/510f6df2-0fb4-58a5-93eb-cb6fc18c9221')
    expect(response.body).toEqual({
      id: '510f6df2-0fb4-58a5-93eb-cb6fc18c9221',
      name: 'Biologia',
      teachers: 'Afonso,Leandro',
      rooms: 'B1,B2',
      start_at: '08:00:00',
      end_at: '10:00:00',
      created_at: expect.any(String),
      disabled: false
    })
    done()
  })

  test('get to /courses/:id with invalid id should return as expected', async done => {
    const response = await request.get('/courses/de86fff5-0363-555b-bbcb-768b049eb609')
    expect(response.body).toEqual('')
    done()
  })

  test('post to /courses should create as expected', async done => {
    const response = await request.post('/courses').send({
      name: 'Matemática',
      teachers: 'Cleber,Afonso',
      rooms: 'M1,M2',
      start_at: '10:00',
      end_at: '12:00'
    })
    expect(response.body).toEqual({
      id: expect.any(String),
      name: 'Matemática',
      teachers: 'Cleber,Afonso',
      rooms: 'M1,M2',
      start_at: '10:00:00',
      end_at: '12:00:00',
      created_at: expect.any(String),
      disabled: false
    })
    done()
  })

  test('put to /courses/:id should update as expected', async done => {
    const response = await request.put('/courses/510f6df2-0fb4-58a5-93eb-cb6fc18c9221').send({
      name: 'Inglês',
      teachers: 'Erika,Rodolfo',
      rooms: 'B1,C4',
      start_at: '14:00:00',
      end_at: '15:00:00'
    })
    expect(response.body).toEqual({
      id: expect.any(String),
      name: 'Inglês',
      teachers: 'Erika,Rodolfo',
      rooms: 'B1,C4',
      start_at: '14:00:00',
      end_at: '15:00:00',
      created_at: expect.any(String),
      disabled: false
    })
    done()
  })

  test('delete to /courses/:id should delete as expected', async done => {
    const response = await request.delete('/courses/510f6df2-0fb4-58a5-93eb-cb6fc18c9221')
    expect(response.statusCode).toBe(202)
    done()
  })
})
