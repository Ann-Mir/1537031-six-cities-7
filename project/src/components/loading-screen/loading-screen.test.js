import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';


describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const {getByText} = render(<LoadingScreen />);
    const mainElement = getByText('Loading...');
    expect(mainElement).toBeInTheDocument();
  });
});
