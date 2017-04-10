import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BasePage } from "@app/common";
import { UserService } from "@app/security";
import { AddNewUserModel } from "./addNewUserModel";
@Component({
    templateUrl: "src/modules/security/user/addNewUser.html",
})
export class AddNewUser extends BasePage<AddNewUserModel> {
    private userService: UserService;
    constructor(router: Router, userService: UserService) {
        super(router);
        this.model = new AddNewUserModel();
        this.userService = userService;
    }
    protected onReady() {
        console.log("onReady");
    }
    public onCancelClicked(event: any) {
        this.navigate("/users");
    }
    public onSaveClicked() {
        let self = this;
        this.userService.createUser(this.model)
            .then(function () {
                self.navigate("/users");
            });
    }
}