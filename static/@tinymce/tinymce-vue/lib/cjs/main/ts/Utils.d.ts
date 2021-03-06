/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Ref, SetupContext } from 'vue';
import { IPropTypes } from './components/EditorPropTypes';
declare const isValidKey: (key: string) => boolean;
declare const bindHandlers: (initEvent: Event, listeners: any, editor: any) => void;
declare const bindModelHandlers: (props: IPropTypes, ctx: SetupContext, editor: any, modelValue: Ref<any>) => void;
declare const initEditor: (initEvent: Event, props: IPropTypes, ctx: SetupContext, editor: any, modelValue: Ref<any>, content: () => string) => void;
declare const uuid: (prefix: string) => string;
declare const isTextarea: (element: Element | null) => element is HTMLTextAreaElement;
declare const mergePlugins: (initPlugins: string | string[], inputPlugins?: string | string[] | undefined) => string[];
declare const isNullOrUndefined: (value: any) => value is null | undefined;
export { bindHandlers, bindModelHandlers, initEditor, isValidKey, uuid, isTextarea, mergePlugins, isNullOrUndefined };
