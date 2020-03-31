import {MaterialModule} from './material.module';

describe('MaterialModule=appModule', () => {
  let materialComponentsModule: MaterialModule;

  beforeEach(() => {
    materialComponentsModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(materialComponentsModule).toBeTruthy();
  });
});
