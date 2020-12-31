import { TokenService } from "./token.service"

describe('Serviço TokenServvice', () =>{

    let tokenService: TokenService;
    let token: string;

    beforeEach(() => {
        tokenService = new TokenService();
        token = 'meu token';
    })

    it('serviço é instanciado', () => {
        expect(new TokenService()).toBeTruthy()
    })
    it('deve guardar um token', () => {
        tokenService.setToken(token);
        expect(tokenService.hasToken()).toBeTruthy()
        expect(tokenService.getToken()).toEqual(token)
    })
    it('deve remover o token', () => {
        tokenService.setToken(token);
        tokenService.removeToken();
        expect(tokenService.hasToken()).toBeFalsy()
        expect(tokenService.getToken()).toBeNull()
    })

    afterEach(()=> localStorage.clear())
})