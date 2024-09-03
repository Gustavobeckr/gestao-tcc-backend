import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BancaModule } from './routes/banca/banca.module';
import { UsuarioModule } from './routes/usuario/usuario.module';
import { CronogramaModule } from './routes/cronograma/cronograma.module';
import { NotaModule } from './routes/nota/nota.module';
import { ReuniaoModule } from './routes/reuniao/reuniao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestaoTCC'),
    BancaModule,
    UsuarioModule,
    CronogramaModule,
    NotaModule,
    ReuniaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
