import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ModComponent } from './mod/mod.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CarousellModule } from './carousel/carousel.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule} from '@angular/common/http';
import { DinnerComponent } from './dinner/dinner.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BasketComponent } from './basket/basket.component';
import { MainComponent } from './main/main.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductService } from './services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HealthySnackComponent } from './healthy-snack/healthy-snack.component';
import { BabysFoodComponent } from './babys-food/babys-food.component';
import { ForPetsComponent } from './for-pets/for-pets.component';
import { ActiveRecreationTimeComponent } from './active-recreation-time/active-recreation-time.component';
import { CatalogsComponent } from './Lower directory/catalogs/catalogs.component';
import { FooterComponent } from './footer/footer.component';
import { CuisinesOfTheWorldComponent } from './Lower directory/cuisines-of-the-world/cuisines-of-the-world.component';
import { EverythingForHomeComponent } from './Lower directory/everything-for-home/everything-for-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthComponent } from './Lower directory/health/health.component';
import { BeautyComponent } from './Lower directory/beauty/beauty.component';
import { ZooStoreComponent } from './Lower directory/zoo-store/zoo-store.component';
import { HolidayComponent } from './Lower directory/holiday/holiday.component';
import { SweetsComponent } from './Lower directory/sweets/sweets.component';
import { FruitsComponent } from './menu/vegetables_and_fruits/fruits/fruits.component';
import { VegetablesComponent } from './menu/vegetables_and_fruits/vegetables/vegetables.component';
import { NutsComponent } from './menu/vegetables_and_fruits/nuts/nuts.component';
import { TeaCoffeeCacoaComponent } from './menu/drinks/tea-coffee-cacoa/tea-coffee-cacoa.component';
import { HerbalComponent } from './menu/drinks/herbal/herbal.component';
import { WaterComponent } from './menu/drinks/water/water.component';
import { CorbonateComponent } from './menu/drinks/corbonate/corbonate.component';
import { CheesesComponent } from './menu/Milk_cheese_butter_eggs/cheeses/cheeses.component';
import { EggsComponent } from './menu/Milk_cheese_butter_eggs/eggs/eggs.component';
import { YoghurtsComponent } from './menu/Milk_cheese_butter_eggs/yoghurts/yoghurts.component';
import { MilkComponent } from './menu/Milk_cheese_butter_eggs/milk/milk.component';
import { FishComponent } from './menu/fish_and_seafood/fish/fish.component';
import { SeafoodComponent } from './menu/fish_and_seafood/seafood/seafood.component';
import { LunchesComponent } from './menu/Cooking/lunches/lunches.component';
import { PnLunchComponent } from './menu/Cooking/pn-lunch/pn-lunch.component';
import { ChildrenLunchComponent } from './menu/Cooking/children-lunch/children-lunch.component';
import { CakesPastriesComponent } from './menu/Cooking/cakes-pastries/cakes-pastries.component';
import { MeatComponent } from './Meat_poultry/meat/meat.component';
import { ChickenComponent } from './Meat_poultry/chicken/chicken.component';
import { IceCreamComponent } from './Frozen_foods/ice-cream/ice-cream.component';
import { DumplingsComponent } from './Frozen_foods/dumplings/dumplings.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ModComponent,
    AdminComponent,
    DinnerComponent,
    AboutComponent,
    DeliveryComponent,
    BasketComponent,
    MainComponent,
    NewProductsComponent,
    HealthySnackComponent,
    BabysFoodComponent,
    ForPetsComponent,
    ActiveRecreationTimeComponent,
    CatalogsComponent,
    FooterComponent,
    CuisinesOfTheWorldComponent,
    EverythingForHomeComponent,
    HealthComponent,
    BeautyComponent,
    ZooStoreComponent,
    HolidayComponent,
    SweetsComponent,
    FruitsComponent,
    VegetablesComponent,
    NutsComponent,
    TeaCoffeeCacoaComponent,
    HerbalComponent,
    WaterComponent,
    CorbonateComponent,
    CheesesComponent,
    EggsComponent,
    YoghurtsComponent,
    MilkComponent,
    FishComponent,
    SeafoodComponent,
    LunchesComponent,
    PnLunchComponent,
    ChildrenLunchComponent,
    CakesPastriesComponent,
    MeatComponent,
    ChickenComponent,
    IceCreamComponent,
    DumplingsComponent,
    ContactsComponent,
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarousellModule,
    CarouselModule.forRoot(), ButtonsModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}


