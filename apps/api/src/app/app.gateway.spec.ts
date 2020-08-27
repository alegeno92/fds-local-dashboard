import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './app.gateway';

describe('AppGateway', () => {
  let provider: AppGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppGateway],
    }).compile();

    provider = module.get<AppGateway>(AppGateway);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
