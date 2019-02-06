/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import mapHeaderSearchPaths from './mapHeaderSearchPaths';

module.exports = function addToHeaderSearchPaths(project, path) {
  mapHeaderSearchPaths(project, searchPaths => searchPaths.concat(path));
};
