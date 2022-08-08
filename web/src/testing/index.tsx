import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { MockProviders } from '@redwoodjs/testing/web';
export * from '@redwoodjs/testing/web';

import i18n from '../i18n/config';

const customRenderer = (ui: React.ReactElement, options?: {}): RenderResult => {
  return render(ui, {
    wrapper: (props) => (
      <I18nextProvider i18n={i18n}>
        <MockProviders {...props} />
      </I18nextProvider>
    ),
    ...options,
  });
};

export { customRenderer as render };
