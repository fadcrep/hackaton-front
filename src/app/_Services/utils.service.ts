import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  _getRawConfig() {
    return window['__WT_APP_CONFIG__'];
  }

  getApiUrl() {
    return this._getRawConfig().apiBaseUrl;
  }
}
