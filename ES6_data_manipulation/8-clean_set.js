export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const strings = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  });

  return strings.join('-');
}
