import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/dev-mob-api', { useNewUrlParser: true, useFindAndModify: false }),
    MongooseModule.forRoot('mongodb+srv://admin:admin123@aps-devmobile-citkh.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
