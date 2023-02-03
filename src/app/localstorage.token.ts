import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    //can use HTML APIs
    //window.
    return localStorage;
  },
});
