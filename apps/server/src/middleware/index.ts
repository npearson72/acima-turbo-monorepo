import express from 'express';

export * from './globalErrorHandler';

export default [
  express.json({
    type: ['application/json', 'application/vnd.api+json']
  })
];
