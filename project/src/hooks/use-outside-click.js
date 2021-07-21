import { useEffect } from 'react';


function useOutsideClick(ref, func) {

  useEffect(() => {

    const handleClickOutside = (evt) => {
      if (ref.current && !ref.current.contains(evt.target)) {
        func(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, func]);
}

export default useOutsideClick;
