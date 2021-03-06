/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+javascript_foundation
 */

import normalizeProjectName from '../../android/patches/normalizeProjectName';

const name = 'test';
const scopedName = '@scoped/test';

describe('normalizeProjectName', () => {
  it('should replace slashes with underscores', () => {
    expect(normalizeProjectName(name)).toBe('test');
    expect(normalizeProjectName(scopedName)).toBe('@scoped_test');
  });
});
