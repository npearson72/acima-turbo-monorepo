import { lazy } from 'react';

let todoMobile: any;
let todoWeb: any;

if (process.env.PLATFORM === 'mobile') {
  todoMobile = lazy(() => import('./Todo.mobile'));
}

if (process.env.PLATFORM === 'web') {
  todoWeb = lazy(() => import('./Todo.web'));
}

if (process.env.PLATFORM === 'stories') {
  todoMobile = lazy(() => import('./Todo.mobile'));
  todoWeb = lazy(() => import('./Todo.web'));
}

const TodoMobile = todoMobile;
const TodoWeb = todoWeb;

export { TodoMobile, TodoWeb };
