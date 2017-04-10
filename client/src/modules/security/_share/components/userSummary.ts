import { Output, EventEmitter, ElementRef, Component, Input, OnChanges } from "@angular/core";
@Component({
    selector: "user-summary",
    templateUrl: "src/modules/security/_share/components/userSummary.html"
})
export class UserSummary{
    @Input() firstName: string = null;
    @Output() firstNameChange: any = new EventEmitter<string>();
    public onChange(newValue: string) {
        this.firstNameChange.emit(newValue);
    }
}