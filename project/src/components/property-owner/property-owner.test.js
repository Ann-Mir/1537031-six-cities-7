import React from 'react';
import {render} from '@testing-library/react';
import PropertyOwner from './property-owner';


const host = {
  avatarUrl: 'testUrl',
  isPro: true,
  name: 'Test Name',
};

describe('Component: PropertyOwner', () => {
  it('should render correctly', () => {
    const {getByText, getByRole} = render(<PropertyOwner host={host} />);
    const nameElement = getByText('Test Name');
    const avatarElement = getByRole('img');
    const proElement = getByText('Pro');

    expect(nameElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', 'testUrl');
    expect(proElement).toBeInTheDocument();
  });
});
