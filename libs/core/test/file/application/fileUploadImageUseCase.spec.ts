import { fileUploadImage } from '../../../src/file/application/fileUploadImage';
import { IFileRepository } from '../../../src/file/domain/file.repository';

const getRepositoryMock = (): IFileRepository => ({
  uploadImage: jest.fn(),
});

const FILE: File = new File(['abc'], 'abc');

describe('Create Phone Use Case', () => {
  let repositoryMock: IFileRepository;

  beforeEach(() => {
    // Mocked repo configuration
    repositoryMock = getRepositoryMock();
    repositoryMock.uploadImage = jest.fn().mockResolvedValue(FILE);
  });

  it('uploadImage phone successfully', async () => {
    // Mocked repo configuration
    const fileUploadImageUseCase = fileUploadImage(repositoryMock);

    // Execution
    await fileUploadImageUseCase(FILE);

    // Expectations
    expect(repositoryMock.uploadImage).toBeCalledTimes(1);
    expect(repositoryMock.uploadImage).toBeCalledWith(FILE);
  });
});
