export const ACCESS_COOKIE_NAME = 'kq_site_access'

const PLACEHOLDER_VALUES = new Set([
  '',
  'REPLACE_WITH_BASE64_EMAIL',
  'REPLACE_WITH_BASE64_PASSWORD',
  'REPLACE_WITH_A_LONG_RANDOM_SECRET',
])

export function getAccessSessionSecret() {
  return process.env.APP_ACCESS_SESSION_SECRET?.trim() ?? ''
}

export function isValidAccessCookie(value: string | undefined) {
  const secret = getAccessSessionSecret()
  return Boolean(secret && !PLACEHOLDER_VALUES.has(secret) && value === secret)
}

export function decodeCredential(value: string | undefined) {
  if (!value || PLACEHOLDER_VALUES.has(value.trim())) {
    return ''
  }

  try {
    return Buffer.from(value.trim(), 'base64').toString('utf8').trim()
  } catch {
    return ''
  }
}

export function areAccessCredentialsConfigured() {
  return Boolean(
    decodeCredential(process.env.ADMIN_EMAIL_ENCODED) &&
      decodeCredential(process.env.ADMIN_PASSWORD_ENCODED) &&
      getAccessSessionSecret() &&
      !PLACEHOLDER_VALUES.has(getAccessSessionSecret()),
  )
}

export function verifyAccessCredentials(email: string, password: string) {
  const expectedEmail = decodeCredential(process.env.ADMIN_EMAIL_ENCODED)
  const expectedPassword = decodeCredential(process.env.ADMIN_PASSWORD_ENCODED)

  return Boolean(
    expectedEmail &&
      expectedPassword &&
      email.trim().toLowerCase() === expectedEmail.toLowerCase() &&
      password === expectedPassword,
  )
}
