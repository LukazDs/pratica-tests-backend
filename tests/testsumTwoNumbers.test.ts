import { sumTwoNumbers } from "../src/app"

describe("Teste soma de dois números!", () => {
    it("Retorna 4 para a soma de 2 e 2", () => {
        expect(sumTwoNumbers(2, 2)).toEqual(4)
    });
});