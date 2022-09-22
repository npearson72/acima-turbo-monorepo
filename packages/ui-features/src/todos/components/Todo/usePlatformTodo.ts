import { lazy } from 'react';

let _mobileTodo: any;
let _webTodo: any;

if (process.env.PLATFORM === 'mobile') {
  _mobileTodo = lazy(() => import('./Todo.mobile'));
}

if (process.env.PLATFORM === 'web') {
  _webTodo = lazy(() => import('./Todo.web'));
}

if (process.env.PLATFORM === 'stories') {
  _mobileTodo = lazy(() => import('./Todo.mobile'));
  _webTodo = lazy(() => import('./Todo.web'));
}

type Story = Record<string, any> | undefined;

export const usePlatformTodo = (story: Story) => {
  let _platformTodo = _webTodo;

  if (!_webTodo || story?.mobile) {
    _platformTodo = _mobileTodo;
  }

  const PlatformTodo = _platformTodo;

  return { PlatformTodo };
};
