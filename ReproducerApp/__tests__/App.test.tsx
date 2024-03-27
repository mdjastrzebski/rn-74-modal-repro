/**
 * @format
 */

import {Modal, View} from 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders Modal correctly', () => {
  renderer.create(<Modal />);
});

it('renders Modal with children correctly', () => {
  renderer.create(
    <Modal visible={true}>
      <View />
    </Modal>,
  );
});
