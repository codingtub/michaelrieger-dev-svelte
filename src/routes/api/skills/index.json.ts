import type { SapperRequest, SapperResponse } from '@sapper/server';

export async function get(req: SapperRequest, res: SapperResponse, next: () => void) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({message: 'Hello World!'}));
}
