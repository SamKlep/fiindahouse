import bcrypt from 'bcryptjs'

const realtors = [
  {
    name: 'John Edwards',
    photo: 'https://mcwb.com/wp-content/uploads/2014/05/jordan.jpg',
    description: 'test',
    phone: '111-111-1111',
    email: 'jedwards@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: true,
  },
  {
    name: 'Alice Ximena',
    photo:
      'https://cdn.pixabay.com/photo/2018/01/07/17/42/outdoors-3067868__340.jpg',
    description: 'test',
    phone: '222-222-2222',
    email: 'aximena@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
  {
    name: 'James Dillon',
    photo:
      'https://cdn.pixabay.com/photo/2019/09/05/21/50/businessman-4455089_1280.jpg',
    description: 'test',
    phone: '111-211-1111',
    email: 'jdillan@example.com',
    password: bcrypt.hashSync('123456', 10),
    is_mvp: false,
  },
]

export default realtors
