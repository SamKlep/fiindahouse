import bcrypt from 'bcryptjs'

const realtors = [
  {
    name: 'Real Realtor',
    email: 'real@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: true,
  },
  {
    name: 'Fake Realtor',
    email: 'fake@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
  {
    name: 'Real Fake Realtor',
    email: 'realfake@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
]

export default realtors
