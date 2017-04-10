import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IoCNames, BasePage } from "@app/common";
import { IUserService } from "@app/security";
import routes from "../_share/config/route";
@Component({
    templateUrl: "src/modules/security/user/users.html"
})
export class Users extends BasePage<any> {
    public selectedUser: any = {};
    public users: Array<any> = [];
    constructor(router: Router) {
        super(router);
        let self = this;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers().then(function (users: Array<any>) {
            self.users = users;
        });
    }
    public onEditUserClicked(userId: string) {
        let option = {
            name: routes.user.editUser.name,
            userId: userId
        };
        this.navigate(option);
    }
    public onSummaryClicked(user: any) {
        this.selectedUser = user;
    }
    public onFirstNameChanged(newname: string) {
        this.selectedUser.firstName = newname;
    }
}