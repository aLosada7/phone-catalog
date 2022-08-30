import {
  UIRouter,
  UIView,
  pushStateLocationPlugin,
  UIRouterReact,
} from '@uirouter/react';
import axios from 'axios';

import { states } from './phone/shared/utils/PhoneRoutes';

axios.defaults.baseURL = 'http://localhost:3333';

const config = (router: unknown) => {
  (router as UIRouterReact).urlService.rules.otherwise('/phones');
};

export function App() {
  return (
    <UIRouter
      plugins={[pushStateLocationPlugin]}
      states={states}
      config={config}
    >
      <UIView />
    </UIRouter>
  );
}

export default App;
