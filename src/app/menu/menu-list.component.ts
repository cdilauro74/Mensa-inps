import { Component, OnInit } from "@angular/core";
import { Dish } from "./dish";
import { DishService } from "./dish.service";

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html'
})

export class MenuListComponent implements OnInit {
    errorMessage: any;
    dietMessage: string;
    panelHeading = 'Menù del giorno'
    imagewidth = 100
    dishes: Dish[]

    constructor(private _dishService: DishService) { }

    _totPrice: number = 0
    get totPrice(): number {
        this._totPrice = 0;
        this.dishes.forEach(x => this._totPrice += (x.counter * x.price))
        return this._totPrice;
    }

    decCounter(d: Dish) {
        if (d.counter > 0) {
            d.counter = +d.counter - 1
        }
    }
    incCounter(d: Dish) {
        d.counter = +d.counter + 1
    }

    reset() {
        this.dishes.forEach(x => x.counter = 0)
        // for (let dish of this.dishes){
        //     if (dish.counter>0){
        //         dish.counter=0
        //     }
        // }
    }

    doOrder() {
        let priceTot = 0;
        for (let dish of this.dishes) {
            if (dish.counter > 0) {
                console.log(`Hai Ordinato ${dish.counter} porzioni di ${dish.name}`)
                priceTot = priceTot + (dish.price * dish.counter)
            }
        }
        console.log(`Totale da pagare  ${priceTot} `)
    }

    ngOnInit(): void {
        //console.log("OnInit");    
        this._dishService.getDishes()
        .subscribe(
            dishes=>this.dishes = dishes,
            error=>this.errorMessage = error
        )
    }

    onNotifyDiet(message: string) {
        this.dietMessage = message
    }
}