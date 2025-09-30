export function load(event) {
  // expose selected locale from hook to client
  return { locale: event.locals.locale };
}
