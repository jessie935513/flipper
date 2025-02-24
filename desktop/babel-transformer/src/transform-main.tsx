/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {default as doTransform} from './transform';
import {default as getCacheKey} from './get-cache-key';
import {default as flipperEnv} from './flipper-env';

const presets = [
  [
    require('@babel/preset-env'),
    {targets: {electron: flipperEnv.FLIPPER_ELECTRON_VERSION}},
  ],
];
const plugins = [
  require('./fsevents-dynamic-imports'),
  require('./electron-requires-main'),
  require('./fb-stubs'),
];

module.exports = {
  transform,
  getCacheKey,
};

function transform({
  filename,
  options,
  src,
}: {
  filename: string;
  options: any;
  src: string;
}) {
  return doTransform({filename, options, src, presets, plugins});
}
