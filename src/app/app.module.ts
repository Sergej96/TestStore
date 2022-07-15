import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './store/cart/cart.component';
import { CatalogComponent } from './store/catalog/catalog.component';
import { StoreComponent } from './store/store.component';
import { ButtonComponent } from './ui/button/button.component';
import { LoaderComponent } from './ui/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CatalogComponent,
    CartComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru'
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
