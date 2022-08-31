import { PhoneListContainer } from '../../../../shared/containers/phoneListContainer';
import { PhoneListItemLinkComponent } from '../../components/phoneListItemLinkComponent';

export const PhoneCockpitListPage = () => {
  return <PhoneListContainer RowComponent={<PhoneListItemLinkComponent />} />;
};
