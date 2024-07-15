import { Component } from "@angular/core";

@Component({
    selector: "main-menu",
    templateUrl: "./main-menu.component.html",
    styleUrls: ["./main-menu.component.css"],
})
export class MainMenuComponent {
    mainMenu: string[] = [
        "Home",
        "Products",
        "Sale",
        "New Arrivals",
        "Contact",
    ];
}
