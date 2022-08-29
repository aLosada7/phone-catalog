import { Express, Request, Response } from 'express';

import { IPhone } from '@phone-catalog/core';
import { PHONE_SAMPLE_1, PHONE_SAMPLE_2 } from '@phone-catalog/core-data/phone';

let phones: IPhone[] = [
  { ...PHONE_SAMPLE_1, id: 1 },
  { ...PHONE_SAMPLE_2, id: 2 },
];

export function addPhoneRoutes(app: Express) {
  list(app);
  get(app);
  add(app);
  update(app);
  remove(app);
}
const list = (app: Express) =>
  app.get('/api/phone', (req: Request, resp: Response) =>
    resp.send({ total: phones.length, data: phones })
  );

const get = (app: Express) => {
  app.get(
    '/api/phone/:phoneId',
    (req: Request<{ phoneId: string }>, resp: Response) => {
      const phone = phones.find(
        (phone) => phone.id === Number(req.params.phoneId)
      );
      resp.send(phone);
    }
  );
};

const add = (app: Express) => {
  app.post('/api/phone', (req: Request, resp: Response) => {
    const newPhone = {
      ...req.body.phone,
      id: Number(new Date()),
    };
    phones.push(newPhone);
    resp.send(newPhone);
  });
};

const update = (app: Express) => {
  app.put(
    '/api/phone/:phoneId',
    (req: Request<{ phoneId: string }>, resp: Response) => {
      if (!req.body.phone.id)
        throw new Error(`Runtime Error: Phone doesn't have id`);

      const phonesUpdated = phones.map((phone) => {
        return phone.id === Number(req.params.phoneId) ? req.body.phone : phone;
      });
      phones = phonesUpdated;

      resp.send(req.body.phone);
    }
  );
};

const remove = (app: Express) => {
  app.delete(
    '/api/phone/:phoneId',
    (req: Request<{ phoneId: string }>, resp: Response) => {
      if (!req.params.phoneId)
        throw new Error(`Runtime Error: Phone doesn't have id`);

      const phonesUpdated = phones.filter(
        (phone) => phone.id !== Number(req.params.phoneId)
      );
      phones = phonesUpdated;

      resp.send();
    }
  );
};
