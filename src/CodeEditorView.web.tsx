import * as React from 'react';

import { CodeEditorViewProps } from './CodeEditor.types';

export default function CodeEditorView(props: CodeEditorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
