import { TestBed } from "@angular/core/testing";
import { TokenService } from "../token/token.service"
import { UserService } from "./user.service";

describe('Serviço UserService', () => {

    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        });
        userService = TestBed.get(UserService)
    })

    it('deve ser instanciado', () => {
        let testUserService = new UserService(new TokenService());
        expect(testUserService).toBeDefined()
        expect(testUserService).toBeTruthy()

    })

    it('deve validar o token', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwOTQyODgxOSwiZXhwIjoxNjA5NTE1MjE5fQ.88a0kSl-H2Et5yJoWalecsbyZmNv7q5JcX5iUfHyLrI';
        userService.setToken(token);
        expect(userService.isLogged()).toBeTruthy();
        expect(userService.getUserName()).toEqual('flavio');
        userService.getUser().subscribe(user => expect(user).toBeTruthy())
    })

    it('executa logout', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwOTQyODgxOSwiZXhwIjoxNjA5NTE1MjE5fQ.88a0kSl-H2Et5yJoWalecsbyZmNv7q5JcX5iUfHyLrI';
        userService.setToken(token);
        userService.logout()
        expect(userService.isLogged()).toBeFalsy();
        expect(userService.getUserName()).toBeFalsy();
    })

})