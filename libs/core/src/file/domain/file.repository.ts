export interface IFileRepository {
  uploadImage(image: File): Promise<string>; // upload a single file, returns the file name
}
