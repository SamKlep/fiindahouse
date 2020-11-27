import bcrypt from 'bcryptjs'

const realtors = [
  {
    name: 'John Edwards',
    photo: 'no-photo.jpg',
    description: 'test',
    phone: '111-111-1111',
    email: 'jedwards@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: true,
  },
  {
    name: 'Alice Ximena',
    photo: 'no-photo.jpg',
    description: 'test',
    phone: '222-222-2222',
    email: 'aximena@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
  {
    name: 'James Dillon',
    photo: 'no-photo.jpg',
    description: 'test',
    phone: '111-211-1111',
    email: 'jdillan@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
]

export default realtors
