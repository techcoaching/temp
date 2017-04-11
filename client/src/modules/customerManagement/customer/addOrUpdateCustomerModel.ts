import { BaseModel, ValidationException } from "@app/common";
export class AddOrUpdateCustomerModel extends BaseModel {
    public id: string = String.empty;
    public name: string = String.empty;
    public location: string = String.empty;
    public import(item: any) {
        this.id = item.id;
        this.name = item.name;
        this.location = item.location;
    }

    protected getValidationErrors(): ValidationException {
        let exception: ValidationException = new ValidationException();
        if (String.isNullOrWhiteSpace(this.name)) {
            exception.add("customerManagement.addOrUpdateCustomer.validation.nameIsRequired");
        }
        return exception;
    }
}