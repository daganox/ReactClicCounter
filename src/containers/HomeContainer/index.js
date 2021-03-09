import React from 'react';
import { compose } from 'redux';

import Home from '../../views/Home';

const key = 'homeContainer';

function HomeContainer() {
  return (<Home />);
}

export default compose()(HomeContainer);

