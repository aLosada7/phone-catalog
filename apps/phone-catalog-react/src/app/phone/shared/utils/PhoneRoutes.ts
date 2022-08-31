import { UIView } from '@uirouter/react';

import { PhoneCockpitAddPage } from '../../modules/cockpit/pages/phoneCockpitAddPage/PhoneCockpitAddPage';
import { PhoneCockpitListPage } from '../../modules/cockpit/pages/phoneCockpitListPage/PhoneCockpitListPage';
import { PhoneCockpitMainPage } from '../../modules/cockpit/pages/phoneCockpitMainPage/PhoneCockpitMainPage';
import { PhoneEntityMainPage } from '../../modules/entity/pages/phoneEntityMainPage/PhoneEntityMainPage';
import { PhoneEntityDetailPage } from '../../modules/entity/pages/phoneEntityDetailPage/PhoneEntityDetailPage';
import { PhoneMainPage } from '../../pages/phoneMainPage';
import { PhoneEntityDeletePage } from '../../modules/entity/pages/phoneEntityDeletePage';
import { PhoneEntityEditPage } from '../../modules/entity/pages/phoneEntityEditPage';

const cockpitStates = [
  {
    name: 'app.phone.cockpit',
    url: '',
    component: PhoneCockpitMainPage,
    redirectTo: 'app.phone.cockpit.list',
  },
  { name: 'app.phone.cockpit.list', url: '', component: PhoneCockpitListPage },
  {
    name: 'app.phone.cockpit.add',
    url: '/add',
    component: PhoneCockpitAddPage,
  },
];

const entityStates = [
  {
    name: 'app.phone.entity',
    url: '/:phoneId',
    component: PhoneEntityMainPage,
    redirectTo: 'app.phone.entity.detail',
  },
  {
    name: 'app.phone.entity.detail',
    url: '',
    component: PhoneEntityDetailPage,
  },
  {
    name: 'app.phone.entity.edit',
    url: '/edit',
    component: PhoneEntityEditPage,
  },
  {
    name: 'app.phone.entity.delete',
    url: '/delete',
    component: PhoneEntityDeletePage,
  },
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
  ...entityStates,
];
