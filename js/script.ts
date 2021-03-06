import $ from 'jquery';
import { readData } from './reader';
import {
  writeNextTodo,
  writeTodoCount,
  toggleTodoList,
  toggleTodoEmpty,
  addTodo,
  removeTodo,
} from './writer';

const updateAll = (): void => {
  const { count, nextTodoText } = readData();

  writeNextTodo(nextTodoText);
  writeTodoCount(count);
  toggleTodoList(count);
  toggleTodoEmpty(count);
};

export default $(function () {
  $('#addTodo').on('click', function () {
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', function () {
    updateAll();
  });

  $('#todoList').on('click', '.delete', function () {
    removeTodo(this);
    updateAll();
  });

  updateAll();
});
