import { IPhone } from '../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../src/phone/domain/phone.repository';
import { phoneCreate } from '../../../src/phone/application/phoneCreate';
import { PHONE_SAMPLE_1 } from '../../../data/phone';
import { fileUploadImage } from '../../../src/file/application/fileUploadImage';
import { IFileRepository } from '../../../src/file/domain/file.repository';

const getRepositoryMock = (): IPhoneRepository => ({
  list: jest.fn(),
  detail: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});

const getFileRepositoryMock = (): IFileRepository => ({
  uploadImage: jest.fn(),
});

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_1,
  imageToUpload: new File(['abc'], 'abc'),
};

describe('Create Phone Use Case', () => {
  let repositoryMock: IPhoneRepository;
  let fileRepositoryMock: IFileRepository;

  beforeEach(() => {
    // Mocked repo configuration
    repositoryMock = getRepositoryMock();
    repositoryMock.create = jest.fn().mockResolvedValue(initialPhone);
    fileRepositoryMock = getFileRepositoryMock();
    fileRepositoryMock.uploadImage = jest.fn().mockResolvedValue('image.jpeg');
  });

  it('create phone successfully', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(fileRepositoryMock);
    const phoneCreateUseCase = phoneCreate(
      repositoryMock,
      fileUploadImageUseCase
    );

    // Execution
    const result = await phoneCreateUseCase(initialPhone);

    // Expectations
    expect(fileRepositoryMock.uploadImage).toBeCalledTimes(1);
    expect(fileRepositoryMock.uploadImage).toBeCalledWith(initialPhone.imageToUpload);
    expect(repositoryMock.create).toBeCalledTimes(1);
    expect(repositoryMock.create).toBeCalledWith(initialPhone);
    expect(result).toEqual(initialPhone);
  });

  it('throws phone.missingImage Error', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(fileRepositoryMock);
    const phoneCreateUseCase = phoneCreate(
      repositoryMock,
      fileUploadImageUseCase
    );

    const phone = { ...initialPhone };
    delete phone.imageToUpload;

    // Expectations
    await expect(phoneCreateUseCase(phone)).rejects.toThrow(
      `Runtime Error: Image file to upload is missing`
    );
    expect(repositoryMock.update).not.toBeCalled();
  });
});
