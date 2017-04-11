import { IoCNames } from "@app/common";
export class CustomersModel {
    public items: Array<any> = [];
    public actions: Array<any> = [];
    public addPageAction(action: any) {
        this.actions.push(action);
    }
    public import(items: Array<any>) {
        this.items = items;
    }
}