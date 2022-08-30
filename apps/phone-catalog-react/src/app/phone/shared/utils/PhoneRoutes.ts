import { UIView } from '@uirouter/react';

import { PhoneCockpitMainPage } from '../../modules/cockpit/phoneCockpitMainPage/PhoneCockpitMainPage';
import { PhoneMainPage } from '../../pages/phoneMainPage';

const cockpitStates = [
  { name: 'app.phone.cockpit', url: '', component: PhoneCockpitMainPage },
];

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
    redirectTo: 'app.phone.cockpit',
  },
  ...cockpitStates,
];
