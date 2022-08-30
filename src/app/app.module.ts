import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/components/recipe/recipe.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { RecipeBorderCardDirective } from './recipe-border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    PageNotFoundComponent,
    //RecipeBorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
