import React from 'react';

import {StatusSymbol} from 'components/common';
import {availableForAssignments} from 'data/config';

export const Status = () => {
  if (availableForAssignments) {
    return (
      <div>
        <StatusSymbol available></StatusSymbol>
        Available
      </div>
    );
  }
  return (
    <div>
      unavailable
    </div>
  );
};
