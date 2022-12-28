import { Module } from '@nestjs/common';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';

import { MongooseModule } from '@nestjs/mongoose';

import { RestaurantOwnerModule } from '@xreats/nestjs-restaurant-owner';
import { HttpExceptionFilter, JwtAuthGuard } from '@xreats/nestjs/shared';


const GlobalJwtAuthGuard = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard,
};

const GlobalHttpExceptionFilter = {
  provide: APP_FILTER,
  useClass: HttpExceptionFilter
}


@Module({
  imports: [
    MongooseModule.forRoot(process.env.NX_DB_URL), 
    RestaurantOwnerModule
  ],
  providers: [
    GlobalJwtAuthGuard,
    GlobalHttpExceptionFilter
  ]
})

export class AppModule {}
