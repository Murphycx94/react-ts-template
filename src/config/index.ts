export const ENV: string = process.env.NODE_ENV || 'development';

export const COMPILE_DATE: string = process.env.COMPILE_DATE || '';

export const TEST: any = process.env.TEST;

export const DEV: boolean = ENV === 'development';

export const BASE_API: string = TEST ? "http://dev.muggle-inc.com/" : "http://club.muggle-inc.com";