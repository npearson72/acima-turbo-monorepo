import { lazy } from 'react';

let _mobalModal: any;
let _webModal: any;

if (process.env.PLATFORM === 'mobile') {
  _mobalModal = lazy(() => import('./Modal.mobile'));
}

if (process.env.PLATFORM === 'web') {
  _webModal = lazy(() => import('./Modal.web'));
}

if (process.env.PLATFORM === 'stories') {
  _mobalModal = lazy(() => import('./Modal.mobile'));
  _webModal = lazy(() => import('./Modal.web'));
}

type Story = Record<string, any> | undefined;

export const usePlatformModal = (story: Story) => {
  let _platformModal = _webModal;

  if (!_webModal || story?.mobile) {
    _platformModal = _mobalModal;
  }

  const PlatformModal = _platformModal;

  return { PlatformModal };
};
