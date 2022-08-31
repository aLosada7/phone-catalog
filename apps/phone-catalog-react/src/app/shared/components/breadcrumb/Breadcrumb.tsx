import { useState, useEffect } from 'react';
import { useSref, useRouter, StateObject, StateParams } from '@uirouter/react';

import {
  Breadcrumb as EdeneBreadcrumb,
  BreadcrumbItem as EdenebreadcrumbItem,
} from '@edene/components';

interface BreadcrumbProps {
  state: StateObject;
  params: StateParams;
}

const BreadcrumbItem = ({ state, params }: BreadcrumbProps) => {
  const uiSref = useSref(state.name, params);
  const linkText = uiSref.href?.split('/').pop();
  if (!state.url.pattern || !linkText) return null;
  return (
    <EdenebreadcrumbItem
      active={linkText === window.location.href?.split('/').pop()}
      {...uiSref}
    >{`${linkText.charAt(0).toUpperCase()}${linkText.slice(
      1
    )}`}</EdenebreadcrumbItem>
  );
};

export const Breadcrumb = () => {
  const [states, setStates] = useState<StateObject[]>([]);
  const router = useRouter();

  const state: StateObject = router.globals.$current;
  const params: StateParams = router.globals.params;

  useEffect(() => setStates(state.path.slice(2)), [state, params]);

  return (
    <EdeneBreadcrumb>
      {states.map((state, index) => (
        <BreadcrumbItem key={state.name} state={state} params={params} />
      ))}
    </EdeneBreadcrumb>
  );
};
