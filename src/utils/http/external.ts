/* this file must export the following functions:
 * 1. logout: logout function
 * 2. message: message function
 * 3. getToken: get token function
 */

import type { RequestError } from './types'
export function logout() {}
export function message(_config: RequestError) {}
export function getToken() {
  return ''
}
