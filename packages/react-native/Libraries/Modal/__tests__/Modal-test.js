/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

'use strict';

const render = require('../../../jest/renderer');
const View = require('../../Components/View/View');
const Modal = require('../Modal');
const React = require('react');

describe('<Modal />', () => {
  it('should render as <Modal> when mocked', () => {
    const instance = render.create(
      <Modal>
        <View />
      </Modal>,
    );
    expect(instance).toMatchSnapshot();
  });

  it('should not render <Modal> when mocked with visible=false', () => {
    const instance = render.create(
      <Modal visible={false}>
        <View testID="child" />
      </Modal>,
    );
    expect(instance.toJSON()).toBeNull();
  });

  it('should shallow render as <Modal> when mocked', () => {
    const output = render.shallow(
      <Modal>
        <View />
      </Modal>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should shallow render as <Modal> when not mocked', () => {
    jest.dontMock('../Modal');

    const output = render.shallow(
      <Modal>
        <View />
      </Modal>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should render as <RCTModalHostView> when not mocked', () => {
    jest.dontMock('../Modal');

    const instance = render.create(
      <Modal>
        <View />
      </Modal>,
    );
    expect(instance).toMatchSnapshot();
  });

  it('should not render <RCTModalHostView> when not mocked with visible=false', () => {
    jest.dontMock('../Modal');

    const instance = render.create(
      <Modal visible={false}>
        <View />
      </Modal>,
    );
    expect(instance.toJSON()).toBeNull();
  });
});
