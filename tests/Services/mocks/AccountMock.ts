export const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

export const accoutInput = {
  username: 'test',
  email: 'test@test.com',
  password: 'test1234',
};

export const accoutOutput = {
  email: 'test@test.com',
  username: 'test',
  _id: '63c5d3cda66bf339cc0cd2bb',
  createdAt: '2023-01-16T22:46:37.648Z',
};

export const accountRestul = {
  message: 'Conta criada com sucesso',
  account: {
    username: 'test',
    email: 'test@test.com',
    id: '63c5d3cda66bf339cc0cd2bb',
    createdAt: '2023-01-16T22:46:37.648Z',
  },
  token: JWT_TOKEN,
}

export const accoutOutputError = {
  message: 'Conta criada com sucesso',
  username: 'test',
  createdAt: '2023-01-16T22:46:37.648Z',
};