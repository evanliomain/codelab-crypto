import { crypt, decrypt } from "./lib/crypto";
import "./style/base.scss";
import "./style/style.scss";

const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLInputElement;
const key = document.getElementById("key") as HTMLInputElement;

input?.addEventListener("keydown", () => {
  output.value = crypt(input.value, key?.value ?? "");
});

output?.addEventListener("keydown", () => {
  input.value = decrypt(output.value, key?.value ?? "");
});
