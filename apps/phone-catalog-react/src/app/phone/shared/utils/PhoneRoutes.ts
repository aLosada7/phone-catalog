import { UIView } from '@uirouter/react';
import { PhoneMainPage } from '../../pages/phoneMainPage';

export const states = [
  {
    name: 'app',
    url: '',
    component: UIView,
  },
  {
    name: 'app.phone',
    url: '/phones',
    component: PhoneMainPage,
  },
];
