const store = {} as any

/* Authority Check */
export const hasPermission = (permission: string | string[]) => {
  const permissions = store.getters.getPermission.map(i => i.expression)
  const check = (p: string) => permissions.indexOf(p) > -1

  if (permission === '*') return true
  return Array.isArray(permission) ? permission.some(per => check(per)) : check(permission)
}
