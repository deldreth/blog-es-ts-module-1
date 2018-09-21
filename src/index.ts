import Module1, { Response } from './Module1';

export function test(): Response {
  const foo = new Module1();

  return foo.request();
}