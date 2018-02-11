import { Component } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test',
        'https://static01.nyt.com/images/2017/04/14/dining/14COOKING-SALMON-WITH-LEMON/14COOKING-SALMON-WITH-LEMON-articleLarge.jpg'),
        new Recipe('The second one', 'This another test',
        'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg')
    ];

    constructor() {

    }
}
