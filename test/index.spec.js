import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Appd from '../src/components/App';

describe('Application', () => {
  it('renders to the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).to.be.true;
  });
});

