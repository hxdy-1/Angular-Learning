import { Component } from "@angular/core";

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
    name = "John Smith";
    addToCart: number = 0;
    product = {
        name: "iPhone X",
        price: 789,
        color: "Black",
        discount: 8.5,
        inStock: 10,
        pImage: "/assets/images/iphone.png",
    };

    getDiscountedPrice() {
        return (
            this.product.price -
            (this.product.price * this.product.discount) / 100
        );
    }

    onNameChange(event: any) {
        this.name = event.target.value;
        console.log(event.target.id);
    }

    handleCartValue(event: any) {
        console.log(event.target.id);
        if (event.target.id === "increment") {
            this.addToCart++;
        } else {
            if (this.addToCart > 0) {
                this.addToCart--;
            }
        }
    }
}