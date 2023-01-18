import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import AccountService from '../../src/Services/AccountService';
import { 
  accountRestul,
  accoutInput,
  accoutOutput,
  accoutOutputError,
  JWT_TOKEN
} from './mocks/AccountMock';
import 'dotenv/config';
import jwt from 'jsonwebtoken';;

afterEach(() => {
  sinon.restore();
})

describe('Deve registrar uma conta com sucesso', () => {
  it('A conta precisa ser registrada com sucesso', async () => {
    sinon.stub(Model, 'create').resolves(accoutOutput);
    sinon.stub(jwt, 'sign').callsFake(() => {
      return JWT_TOKEN
    });

    const service = new AccountService();
    const result = await service.register(accoutInput);

    expect(result).to.be.deep.equal(accountRestul);
  });

  it('Deve retornar um erro caso algo ocorra no banco de dados', async () => {
    const RESULT_ERROR = 'não foi possivel criar sua conta'
    sinon.stub(Model, 'create').resolves(accoutOutputError);

    const service = new AccountService();
    try {
      await service.register(accoutInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  })
});