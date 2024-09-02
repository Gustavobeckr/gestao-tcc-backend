import { Test, TestingModule } from '@nestjs/testing';
import { BancaService } from './banca.service';

describe('BancaService', () => {
  let service: BancaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BancaService],
    }).compile();

    service = module.get<BancaService>(BancaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
