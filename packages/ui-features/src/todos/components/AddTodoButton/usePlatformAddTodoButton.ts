import { lazy } from 'react';

let _mobileAddTodoButton: any;
let _webAddTodoButton: any;

if (process.env.PLATFORM === 'mobile') {
  _mobileAddTodoButton = lazy(() => import('./AddTodoButton.mobile'));
}

if (process.env.PLATFORM === 'web') {
  _webAddTodoButton = lazy(() => import('./AddTodoButton.web'));
}

if (process.env.PLATFORM === 'stories') {
  _mobileAddTodoButton = lazy(() => import('./AddTodoButton.mobile'));
  _webAddTodoButton = lazy(() => import('./AddTodoButton.web'));
}

type Story = Record<string, any> | undefined;

export const usePlatformAddTodoButton = (story: Story) => {
  let _platformAddTodoButton = _webAddTodoButton;

  if (!_webAddTodoButton || story?.mobile) {
    _platformAddTodoButton = _mobileAddTodoButton;
  }

  const PlatformAddTodoButton = _platformAddTodoButton;

  return { PlatformAddTodoButton };
};
