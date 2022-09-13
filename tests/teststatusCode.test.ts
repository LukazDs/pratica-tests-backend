import { statusCodes } from "../src/app";

describe("Teste status code", () => {
    it("Retorna 200 quando passado true a função status code", () => {
        const result = statusCodes(true);
        expect(result.status).toEqual(200);
    })
    it("Retorna 404 quando passado false a função status code", () => {
        const result = statusCodes(false);
        expect(result.status).toEqual(404);
    })
})