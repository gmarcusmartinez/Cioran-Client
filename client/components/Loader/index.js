import React from 'react';

export const Loader = () => {
  return (
    <div class='lds-ellipsis'>
      {[...Array(4).map((_, i) => <div key={i} />)]}
    </div>
  );
};
