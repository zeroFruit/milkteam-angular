/**
 * 설정 파일
 * Location : src/app/app.config.ts
 * Global variables
 */
import { Inject, OpaqueToken } from '@angular/core';

export let OPAQUE_TOKEN = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: String;
  socketEndpoint: String;
};

export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3000',
  socketEndpoint: 'http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3000'
};

export let OpaqueTokenProvider = {
  provider: OPAQUE_TOKEN,
  useValue: APP_CONFIG
};