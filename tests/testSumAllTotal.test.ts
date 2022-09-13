import { sumAllTotal } from "../src/app";

describe("Teste soma total de uma array de numeros", () => {
    it(`Retorna soma total de uma array de objetos com o valor 
    da chave total igual 2 e 3, sendo o resultado do teste igual a 5`, 
    () => {
        const result = sumAllTotal([{ total: 2 }, { total: 3 }])
        expect(result).toEqual(5)
    })
})