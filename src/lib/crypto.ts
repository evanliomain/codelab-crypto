export function crypt(message: string, key: string): string {
  const k = [...key].map(charToNumber);
  return [...message]
    .map(charToNumber)
    .map((character, index) => {
      if (isOutOfBound(character)) return character;
      const incr = k[index % k.length];
      return ((character + incr - 1) % 26) + 1;
    })
    .map(numberToChar)
    .map((character, index) => {
      if (/[A-Z]/.test(message[index])) {
        return character.toUpperCase();
      }
      return character;
    })
    .join("");
}

export function decrypt(message: string, key: string): string {
  const k = [...key].map(charToNumber);
  return [...message]
    .map(charToNumber)
    .map((character, index) => {
      if (isOutOfBound(character)) {
        return character;
      }
      const incr = k[index % k.length];
      const dc = ((character - incr + 1) % 26) - 1;
      if (dc <= 0) {
        return 26 + dc;
      }
      return dc;
    })
    .map(numberToChar)
    .map((character, index) => {
      if (/[A-Z]/.test(message[index])) {
        return character.toUpperCase();
      }
      return character;
    })
    .join("");
}

function charToNumber(c: string): number {
  return c.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1;
}
function numberToChar(n: number): string {
  return String.fromCharCode(n + "a".charCodeAt(0) - 1);
}
function isOutOfBound(n: number): boolean {
  return n < 1 || 26 < n;
}
