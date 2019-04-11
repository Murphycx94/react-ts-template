import { DEV, BASE_URL } from '../../config';

export const getAuth = () => {
  if (DEV) {
    window.location.href = `${BASE_URL}/debug/1?redirect=${encodeURIComponent(window.location.href)}`
  } else {
    window.location.href = `${BASE_URL}/user/login?redirect=${encodeURIComponent(window.location.href)}`
  }
}