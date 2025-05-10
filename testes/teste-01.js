import assert from "node:assert";
import { exibirNomeDogFormatado } from "./formatarNomeDog.js";

describe("Teste do projeto", () => {
  it(`teste 01`, () => {
    assert.strictEqual(
      exibirNomeDogFormatado("mimosa"),
      "MIMOSa"
    );
  });

  it(`teste 02`, () => {});
});
