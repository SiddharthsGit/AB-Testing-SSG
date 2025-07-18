import * as cookie from 'cookie'

export function parseCookies(req) {
  const cookieHeader = req?.headers?.cookie || ''
  return cookie.parse(cookieHeader)
}
