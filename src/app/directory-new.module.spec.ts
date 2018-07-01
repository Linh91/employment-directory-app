import { DirectoryNewModule } from './directory-new.module';

describe('DirectoryNewModule', () => {
  let directoryNewModule: DirectoryNewModule;

  beforeEach(() => {
    directoryNewModule = new DirectoryNewModule();
  });

  it('should create an instance', () => {
    expect(directoryNewModule).toBeTruthy();
  });
});
