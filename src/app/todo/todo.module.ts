import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';

@Module({
  controllers: [TodoController],
})
export class TodoModule {}
