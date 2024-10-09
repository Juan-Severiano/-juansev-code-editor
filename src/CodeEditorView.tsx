import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CodeEditorViewProps } from './CodeEditor.types';

const NativeView: React.ComponentType<CodeEditorViewProps> =
  requireNativeViewManager('CodeEditor');

export default function CodeEditorView(props: CodeEditorViewProps) {
  return <NativeView {...props} />;
}
