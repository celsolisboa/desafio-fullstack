export function existsOrError(value: any, msg: string) {
  if (!value) throw msg;
  if (Array.isArray(value) && value.length === 0) throw msg;
  if (typeof value === "string" && !value.trim()) throw msg;
}

export function notExistsOrError(value: any, msg: string) {
  try {
    existsOrError(value, msg);
  } catch (msg) {
    return;
  }
  throw msg;
}

export function equalsOrError(valueA: any, valueB: any, msg: string) {
  if (valueA !== valueB) throw msg;
}

export function validateEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
