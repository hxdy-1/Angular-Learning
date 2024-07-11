import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
    @Input() all: number = 0;
    @Input() inStock: number = 0;
    @Input() outOfStock: number = 0;

    selectedFilterRadioBtn: string = "all";

    @Output() filterChange = new EventEmitter<string>();

    handleFilterChange() {
        // console.log(this.selectedFilterRadioBtn);
        this.filterChange.emit(this.selectedFilterRadioBtn);
    }
}
