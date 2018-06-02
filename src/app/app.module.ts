import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './Shopping List/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Shopping List/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './Recipe Book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe Book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Recipe Book/recipe-list/recipe-list.component';
import { RecipesComponent } from './Recipe Book/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
