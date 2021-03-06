import React from 'react';
import {render} from '@testing-library/react';

import LoadWrapper from './load-wrapper';

describe('Component: LoadWrapper', () => {
  it('should render correctly if data is loaded', () => {
    const isLoaded = true;
    const { getByText } = render(<LoadWrapper isDataLoaded={isLoaded} >Test element</LoadWrapper>);
    expect(getByText(/Test element/i)).toBeInTheDocument();
  });

  it('should render correctly if data is not loaded', () => {
    const isLoaded = false;
    const { getByText } = render(<LoadWrapper isDataLoaded={isLoaded}>Test element</LoadWrapper>);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});
