import React from 'react';
import renderer from 'react-test-renderer';
import testUI from '../utils/TestUI';

test('renders correctly', () => {
  const tree = renderer.create(<testUI />).toJSON();
  expect(tree).toMatchSnapshot();
});