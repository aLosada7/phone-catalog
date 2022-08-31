import { IPhone, IPhoneList } from '../../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../../src/phone/domain/phone.repository';
import { PhoneHttpRepository } from '../../../../src/phone/infra/impl/phone.http.repository';
import { PHONE_SAMPLE_3 } from '../../../../data/phone';

import c2eSetup from '../../../../../../c2eSetup';

const INITIAL_NAME = PHONE_SAMPLE_3.name;
const UPDATED_NAME = 'Updated Phone on Jest';

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_3,
};

// this test can only be run with the api running
describe.skip('Phone CRUD Testing', () => {
  beforeAll(() => c2eSetup());

  const repo: IPhoneRepository = new PhoneHttpRepository();

  let globalPhone: IPhone;
  let globalPhoneList: IPhoneList;

  it('Find Phone in list with limit filter', async () => {
    globalPhoneList = await repo.list();
    expect(globalPhoneList.data).not.toHaveLength(0);
  });

  it('Create Phone', async () => {
    const resultPhone: IPhone = await repo.create(initialPhone);
    expect(resultPhone).toHaveProperty('name', INITIAL_NAME);
    globalPhone = resultPhone;
  });

  it('Get Phone detail', async () => {
    if (!globalPhone?.id) throw Error('Phone to view dont have id');
    const resultPhone: IPhone = await repo.detail(globalPhone.id);
    expect(resultPhone).toHaveProperty('id', globalPhone.id);
    expect(resultPhone).toHaveProperty('name', INITIAL_NAME);
  });

  it('Update Phone detail', async () => {
    if (!globalPhone?.id) throw Error('Phone to update dont have id');
    const Phone: IPhone = Object.assign(globalPhone, {
      name: UPDATED_NAME,
    });
    const resultPhone: IPhone = await repo.update(Phone);
    expect(resultPhone).toHaveProperty('id', globalPhone.id);
    expect(resultPhone).toHaveProperty('name', UPDATED_NAME);
    globalPhone = resultPhone;
  });

  it('Get Updated Phone detail', async () => {
    if (!globalPhone?.id) throw Error('Phone to view dont have id');
    const resultPhone: IPhone = await repo.detail(globalPhone.id);
    expect(resultPhone).toHaveProperty('id', globalPhone.id);
    expect(resultPhone).toHaveProperty('name', UPDATED_NAME);
  });

  it('Remove Phone', async () => {
    if (!globalPhone?.id) throw Error('Phone to remove dont have id');
    await repo.remove(globalPhone);
    const resultList: IPhoneList = await repo.list();
    expect(resultList.data).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: globalPhone.id,
        }),
      ])
    );
  });
});
