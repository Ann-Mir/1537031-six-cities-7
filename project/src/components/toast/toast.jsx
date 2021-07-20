import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ToastMessages, DEFAULT_TIMEOUT } from '../../const';

function Toast({message = ToastMessages.DEFAULT}) {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, DEFAULT_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '22px',
            zIndex: 1000,
          }}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};


Toast.propTypes = {
  message: PropTypes.string,
};

export default Toast;
