import { describe, expect, it } from "vitest";
import { crypt, decrypt } from "./crypto";

describe("crypto", () => {
  it.each`
    message                          | key
    ${"Velit est ad aliquip esse."}  | ${"maclef"}
    ${"Lorem ipsum dolor sit amet."} | ${"simplon"}
  `("message: $message, key: $key", ({ message, key }) => {
    expect(crypt(message, key)).not.toEqual(message);
    expect(decrypt(crypt(message, key), key)).toEqual(message);
  });
});
