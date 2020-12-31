import { isLowerCase } from "./lower-case.validator";

describe('a função isLowerCase', () => {
    it('deve confirmar quando recebe um texto em caixa baixa', () => {
        const valor = 'luigi';
        const resultado = isLowerCase(valor);
        expect(resultado).toBeTruthy();
    })

    it('deve validar quando o valor não for caixa baixa', () => {
        const valor = 'Wario';
        const resultado = isLowerCase(valor)
        expect(resultado).toBeFalsy();
    })
})