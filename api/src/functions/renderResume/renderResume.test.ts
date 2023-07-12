import { mockHttpEvent } from '@redwoodjs/testing/api';

import { handler } from './renderResume';

describe('renderResume function', () => {
  it('Should respond with 200', async () => {
    const httpEvent = mockHttpEvent({});
    const response = await handler(httpEvent, null);

    expect(response.statusCode).toBe(200);
  });
});
