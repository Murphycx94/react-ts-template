/*
 * @Author: Murphy Chu - shmilyclxy@163.com 
 * @Description: Http类 
 * @Date: 2019-04-09 11:44:08 
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2019-04-09 14:49:06
 */
import Axios from 'axios';
import { BASE_URL } from '../config';

interface IProps {
  baseURL: string
}

// interface IConfig {
//   dataType?: string
// }

interface IHeader {
  token?: string
}

interface IRequestParams {
  url: string,
  method: string,
  params?: any,
  data?: any,
  headers?: IHeader
}

class Http {
  
  protected baseURL: string;

  protected axios: any;

  protected headers: IHeader;

  constructor({ baseURL }: IProps) {
    this.baseURL = baseURL
    this.axios = Axios.create({
      baseURL,
      timeout: 5000,
      withCredentials: true
    })
  }
  public get(url: string, params?: any, data?: any, headers?: IHeader) {
    return this.request({ method: 'get', url, params, data, headers });
  }

  protected request({ method = 'get', url, params, data, headers }: IRequestParams) {
    return this.axios({ method, url, params, data });
  }
};

const http = new Http({ baseURL: BASE_URL });

export default http;