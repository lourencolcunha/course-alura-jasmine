import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of, throwError } from "rxjs";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { SignUpComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

describe("o formulario signup", () => {

    let component: SignUpComponent;
    let router: Router;
    let signUpService: SignUpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [
                HttpClientTestingModule, 
                VMessageModule, 
                ReactiveFormsModule, 
                RouterTestingModule.withRoutes([])],
            providers: [UserNotTakenValidatorService, SignUpService]
        }).compileComponents();
    }))

    beforeEach(() =>{
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.get(Router);
        signUpService = TestBed.get(SignUpService);
    })

    it("deve ser instanciado", () => {
        expect(component).toBeTruthy()
    })

    it("deve cadastrar o usuario", () => {
        const spyRouter = spyOn(router, "navigate");

        const spyService = spyOn(signUpService, "signup").and.returnValue(of(null));

        component.signupForm.get("email").setValue("email@email.com");
        component.signupForm.get("fullName").setValue("fullname");
        component.signupForm.get("userName").setValue("username");
        component.signupForm.get("password").setValue("passtheword");

        component.signUp();

        expect(spyRouter).toHaveBeenCalledWith([""]);
        expect(spyService).toHaveBeenCalled();
        
    })

    it("deve realizar o log caso ocorra um erro", () => {
        
        const spyLog = spyOn(console, "log");
        const spyService = spyOn(signUpService, "signup").and.returnValue(throwError("validation error"));
        component.signupForm.get("email").setValue("email@email.com");
        component.signupForm.get("fullName").setValue("fullname");
        component.signupForm.get("userName").setValue("username");
        component.signupForm.get("password").setValue("1");
        component.signUp();

        expect(spyLog).toHaveBeenCalledWith("validation error");

    })
})