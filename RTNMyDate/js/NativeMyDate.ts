import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getNativeDate(date: string): string;
}

export default TurboModuleRegistry.get<Spec>('RTNMyDate') as Spec | null;
