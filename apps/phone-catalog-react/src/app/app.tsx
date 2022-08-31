import { EdeneTheme } from '@edene/foundations';
import {
  UIRouter,
  UIView,
  pushStateLocationPlugin,
  UIRouterReact,
} from '@uirouter/react';
import axios from 'axios';

import { states } from './phone/shared/utils/PhoneRoutes';
import { Settings } from './shared/components/settings';

axios.defaults.baseURL = 'http://localhost:3333';

const config = (router: unknown) => {
  (router as UIRouterReact).urlService.rules.otherwise('/phones');
};

export function App() {
  return (
    <EdeneTheme>
      <UIRouter
        plugins={[pushStateLocationPlugin]}
        states={states}
        config={config}
      >
        <Settings />
        <UIView />
      </UIRouter>
    </EdeneTheme>
  );
}

export default App;
