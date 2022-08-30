// Key used for SWR to store and revalidate CommitteeDefinition info.
export const PHONE_SWR_KEY = 'phone';

// Returns mutate key for phones based on the phoneId
export function getPhoneMutateSwrKey(phoneId: number): string {
  return `${PHONE_SWR_KEY}/${phoneId}`;
}

// Key used for SWR to store and revalidate CommitteeDefinition info.
export const PHONE_PROXY_SWR_KEY = 'phone-proxy';

// Returns mutate key for phones based on the phoneId
export function getPhoneProxyMutateSwrKey(phoneId: string): string {
  return `${PHONE_PROXY_SWR_KEY}/${phoneId}`;
}
