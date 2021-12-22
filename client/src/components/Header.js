import React from 'react';

import icon from '../icon.svg';

export const Header = () => {
  return (
    <div>
      <p style={{ color: 'white' }}>Follow the phone down ;)</p>
      <h1>
        <img src={icon} alt='brick phone' />
        TranslaT9r
      </h1>
      <h4 style={{ marginTop: '1%' }}>
        Give us your T9 Number, and we'll give you a list of all the possible
        words you could make!
      </h4>
    </div>
  );
};
