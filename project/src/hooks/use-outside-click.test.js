import { renderHook } from '@testing-library/react-hooks';

import useOutsideClick from './use-outside-click';

describe('Hook: useOutsideClick', () => {
  it('should return object', () => {
    const ref = null;

    const { result } = renderHook(() => useOutsideClick(ref, jest.fn()));

    expect(result).toBeInstanceOf(Object);
  });
});
