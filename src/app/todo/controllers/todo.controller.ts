import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class TodoController {
  @Get()
  @Render('create-todos')
  createTodos() {
    return {};
  }

  @Get()
  @Render('update-todos')
  updateTodos() {
    return {};
  }

  @Get()
  @Render('list-todos')
  listTodos() {
    return {};
  }
}
