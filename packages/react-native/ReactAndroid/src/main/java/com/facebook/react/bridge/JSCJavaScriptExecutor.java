/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.bridge;

import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;

/** @deprecated use {@link com.facebook.react.jscexecutor.JSCExecutor} instead. */
@DoNotStrip
@Deprecated
/* package */ class JSCJavaScriptExecutor extends JavaScriptExecutor {
  static {
    ReactBridge.staticInit();
  }

  /* package */ JSCJavaScriptExecutor(ReadableNativeMap jscConfig) {
    super(initHybrid(jscConfig));
  }

  @Override
  public String getName() {
    return "JSCJavaScriptExecutor";
  }

  private static native HybridData initHybrid(ReadableNativeMap jscConfig);
}
