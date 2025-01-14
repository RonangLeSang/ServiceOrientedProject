import { Test, TestingModule } from '@nestjs/testing';
import { MainBackEndController } from './main-back-end.controller';
import { MainBackEndService } from './main-back-end.service';

describe('MainBackEndController', () => {
  let mainBackEndController: MainBackEndController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainBackEndController],
      providers: [MainBackEndService],
    }).compile();

    mainBackEndController = app.get<MainBackEndController>(MainBackEndController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mainBackEndController.getHello()).toBe('Hello World!');
    });
  });
});
