import { memo } from 'react';
import { css } from '@emotion/react';

const preformatted = css`
  background-color: rgb(245, 245, 245);
  border-color: rgb(204, 204, 204);
  line-height: 1.6;
  padding: 0.5rem 1rem;
  margin: 0;
  white-space: pre-wrap;
`;

export const Preformatted = memo(({ data }: { data: unknown }) => (
  <pre css={preformatted}>{JSON.stringify(data, null, 2)}</pre>
));
