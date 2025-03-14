import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL!, {
      onConnectionCreate: (connection: Connection) => {
        connection.on('connected', () => console.log('(Database) connected'));
        return connection;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
