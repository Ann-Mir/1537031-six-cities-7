import React from 'react';
import {render} from '@testing-library/react';
import MainEmpty from './main-empty';


describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const {getByText} = render(<MainEmpty city={'Paris'}/>);
    const statusElement = getByText('No places to stay available');
    const statusDescriptionElement = getByText('We could not find any property available at the moment in Paris');

    expect(statusElement).toBeInTheDocument();
    expect(statusDescriptionElement).toBeInTheDocument();
  });
});
