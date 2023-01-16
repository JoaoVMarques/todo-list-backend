import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import AccountService from '../../src/Services/accountService';

describe('Deve registrar uma conta com sucesso', () => {
  it('A conta precisa ser registrada com sucesso', async () => {
    const accoutInput = {
      username: 'test',
      email: 'test@test.com',
      password: 'test1234',
    };

    const accoutOutput = {
      message: 'Conta criada com sucesso',
      username: 'pedro',
      _id: '63c5d3cda66bf339cc0cd2bb',
      createdAt: '2023-01-16T22:46:37.648Z',
    };

    const accountRestul = {
      message: 'Conta criada com sucesso',
      username: 'pedro',
      id: '63c5d3cda66bf339cc0cd2bb',
      createdAt: '2023-01-16T22:46:37.648Z',
    }

    sinon.stub(Model, 'create').resolves(accoutOutput);

    const service = new AccountService();
    const result = await service.register(accoutInput);

    expect(result).to.be.deep.equal(accountRestul);

    sinon.restore();
  });

  it('Deve retornar um erro caso algo ocorra no banco de dados', async () => {
    const RESULT_ERROR = 'não foi possivel criar sua conta'
    const accoutInput = {
      username: 'test',
      email: 'test@test.com',
      password: 'test1234',
    };

    const accoutOutput = {
      message: 'Conta criada com sucesso',
      username: 'pedro',
      createdAt: '2023-01-16T22:46:37.648Z',
    };

    sinon.stub(Model, 'create').resolves(accoutOutput);

    const service = new AccountService();
    try {
      await service.register(accoutInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }


    sinon.restore();
  })
});