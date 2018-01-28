import React from 'react';
import SecondChild from '../src/app/secondChild.js';
import renderer from 'react-test-renderer';

var list = ['a', 'b', 'c']
test('render list', () => {
  const wrapper = renderer.create(
      <SecondChild list={list}/>,
  );
  let tree = wrapper.toJSON();

  expect(tree).toMatchSnapshot();
});
