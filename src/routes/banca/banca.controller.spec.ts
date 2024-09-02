import { Test, TestingModule } from '@nestjs/testing';
import { BancaController } from './banca.controller';
import { BancaService } from './banca.service';

describe('BancaController', () => {
  let controller: BancaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BancaController],
      providers: [BancaService],
    }).compile();

    controller = module.get<BancaController>(BancaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
