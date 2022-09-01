import { IPhone } from '../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../src/phone/domain/phone.repository';
import { phoneUpdate } from '../../../src/phone/application/phoneUpdate';
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

const IMAGE_TO_UPLOAD = new File(['abc'], 'abc');

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_1,
  id: 1,
};

describe('Update Phone Use Case', () => {
  let repositoryMock: IPhoneRepository;
  let fileRepositoryMock: IFileRepository;

  beforeEach(() => {
    // Mocked repo configuration
    repositoryMock = getRepositoryMock();
    repositoryMock.update = jest.fn().mockResolvedValue(initialPhone);
    fileRepositoryMock = getFileRepositoryMock();
    fileRepositoryMock.uploadImage = jest.fn().mockResolvedValue('image.jpeg');
  });

  it('update phone successfully', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(fileRepositoryMock);
    const phoneUpdateUseCase = phoneUpdate(
      repositoryMock,
      fileUploadImageUseCase
    );

    // Execution
    const result = await phoneUpdateUseCase(initialPhone);

    // Expectations
    expect(result).toEqual(initialPhone);
    expect(repositoryMock.update).toBeCalledTimes(1);
  });

  it('update phone successfully with image', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(fileRepositoryMock);
    const phoneUpdateUseCase = phoneUpdate(
      repositoryMock,
      fileUploadImageUseCase
    );

    // Execution
    const result = await phoneUpdateUseCase({
      ...initialPhone,
      imageToUpload: IMAGE_TO_UPLOAD,
    });

    // Expectations
    expect(result).toEqual(initialPhone);
    expect(fileRepositoryMock.uploadImage).toBeCalledTimes(1);
    expect(fileRepositoryMock.uploadImage).toBeCalledWith(IMAGE_TO_UPLOAD);
    expect(repositoryMock.update).toBeCalledTimes(1);
  });

  it('throws phone.id Error', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(fileRepositoryMock);
    const updateUseCase = phoneUpdate(repositoryMock, fileUploadImageUseCase);

    const phone = { ...initialPhone };
    delete phone.id;

    // Expectations
    await expect(updateUseCase(phone)).rejects.toThrow(
      `Runtime Error: Phone doesn't have id`
    );
    expect(repositoryMock.update).not.toBeCalled();
  });
});
