import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import AccountService from '../../src/Services/AccountService';
import { 
  accountRestul,
  accoutInput,
  accoutOutput,
  accoutOutputError
} from './mocks/AccountMock';

describe('Deve registrar uma conta com sucesso', () => {
  it('A conta precisa ser registrada com sucesso', async () => {

    sinon.stub(Model, 'create').resolves(accoutOutput);

    const service = new AccountService();
    const result = await service.register(accoutInput);

    expect(result).to.be.deep.equal(accountRestul);

    sinon.restore();
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

    sinon.restore();
  })
});