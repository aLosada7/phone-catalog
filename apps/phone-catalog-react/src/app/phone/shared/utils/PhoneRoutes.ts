import { UIView } from '@uirouter/react';
import { PhoneCockpitListPage } from '../../modules/cockpit/phoneCockpitListPage/PhoneCockpitListPage';

import { PhoneCockpitMainPage } from '../../modules/cockpit/phoneCockpitMainPage/PhoneCockpitMainPage';
import { PhoneMainPage } from '../../pages/phoneMainPage';

const cockpitStates = [
  {
    name: 'app.phone.cockpit',
    url: '',
    component: PhoneCockpitMainPage,
    redirectTo: 'app.phone.cockpit.list',
  },
  { name: 'app.phone.cockpit.list', url: '', component: PhoneCockpitListPage },
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
