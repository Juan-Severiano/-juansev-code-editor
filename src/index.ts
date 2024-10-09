import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CodeEditor.web.ts
// and on native platforms to CodeEditor.ts
import CodeEditorModule from './CodeEditorModule';
import CodeEditorView from './CodeEditorView';
import { ChangeEventPayload, CodeEditorViewProps } from './CodeEditor.types';

// Get the native constant value.
export const PI = CodeEditorModule.PI;

export function hello(): string {
  return CodeEditorModule.hello();
}

export async function setValueAsync(value: string) {
  return await CodeEditorModule.setValueAsync(value);
}

const emitter = new EventEmitter(CodeEditorModule ?? NativeModulesProxy.CodeEditor);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CodeEditorView, CodeEditorViewProps, ChangeEventPayload };
