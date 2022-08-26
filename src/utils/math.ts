// generate a unicode string
export const unicode = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}