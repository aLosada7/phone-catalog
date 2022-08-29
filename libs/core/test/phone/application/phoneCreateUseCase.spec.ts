import { IPhone } from '../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../src/phone/domain/phone.repository';
import { phoneCreate } from '../../../src/phone/application/phoneCreate';
import { PHONE_SAMPLE_1 } from '../../../data/phone';

const getRepositoryMock = (): IPhoneRepository => ({
  list: jest.fn(),
  detail: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_1,
};

describe('Create Phone Use Case', () => {
  let repositoryMock: IPhoneRepository;

  beforeEach(() => {
    // Mocked repo configuration
    repositoryMock = getRepositoryMock();
    repositoryMock.create = jest.fn().mockResolvedValue(initialPhone);
  });

  it('create phone successfully', async () => {
    const phoneCreateUseCase = phoneCreate(repositoryMock);

    // Execution
    const result = await phoneCreateUseCase(initialPhone);

    // Expectations
    expect(repositoryMock.create).toBeCalledTimes(1);
    expect(repositoryMock.create).toBeCalledWith(initialPhone);
    expect(result).toEqual(initialPhone);
  });
});
