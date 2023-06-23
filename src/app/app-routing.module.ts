import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BasketComponent } from './basket/basket.component';
import { MainComponent } from './main/main.component';
import { CuisinesOfTheWorldComponent } from './Lower directory/cuisines-of-the-world/cuisines-of-the-world.component';
import { EverythingForHomeComponent } from './Lower directory/everything-for-home/everything-for-home.component';
import { HealthComponent } from './Lower directory/health/health.component';
import { BeautyComponent } from './Lower directory/beauty/beauty.component';
import { ZooStoreComponent } from './Lower directory/zoo-store/zoo-store.component';
import { HolidayComponent } from './Lower directory/holiday/holiday.component';
import { SweetsComponent } from './Lower directory/sweets/sweets.component';
import { FruitsComponent } from './menu/vegetables_and_fruits/fruits/fruits.component';
import { VegetablesComponent } from './menu/vegetables_and_fruits/vegetables/vegetables.component';
import { NutsComponent } from './menu/vegetables_and_fruits/nuts/nuts.component';
import { CorbonateComponent } from './menu/drinks/corbonate/corbonate.component';
import { HerbalComponent } from './menu/drinks/herbal/herbal.component';
import { TeaCoffeeCacoaComponent } from './menu/drinks/tea-coffee-cacoa/tea-coffee-cacoa.component';
import { WaterComponent } from './menu/drinks/water/water.component';
import { CheesesComponent } from './menu/Milk_cheese_butter_eggs/cheeses/cheeses.component';
import { EggsComponent } from './menu/Milk_cheese_butter_eggs/eggs/eggs.component';
import { MilkComponent } from './menu/Milk_cheese_butter_eggs/milk/milk.component';
import { YoghurtsComponent } from './menu/Milk_cheese_butter_eggs/yoghurts/yoghurts.component';
import { FishComponent } from './menu/fish_and_seafood/fish/fish.component';
import { SeafoodComponent } from './menu/fish_and_seafood/seafood/seafood.component';
import { CakesPastriesComponent } from './menu/Cooking/cakes-pastries/cakes-pastries.component';
import { ChildrenLunchComponent } from './menu/Cooking/children-lunch/children-lunch.component';
import { LunchesComponent } from './menu/Cooking/lunches/lunches.component';
import { PnLunchComponent } from './menu/Cooking/pn-lunch/pn-lunch.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ChickenComponent } from './Meat_poultry/chicken/chicken.component';
import { MeatComponent } from './Meat_poultry/meat/meat.component';
import { IceCreamComponent } from './Frozen_foods/ice-cream/ice-cream.component';
import { DumplingsComponent } from './Frozen_foods/dumplings/dumplings.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
    path: 'app',
    component: AppComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'delivery',
  component: DeliveryComponent
},
{
  path: 'basket',
  component: BasketComponent
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'cuisines-of-the-world',
  component: CuisinesOfTheWorldComponent
},
{
  path: 'EverythingForHomeComponent',
  component: EverythingForHomeComponent
},
{
  path: 'HealthComponent',
  component: HealthComponent
},
{
  path: 'BeautyComponent',
  component: BeautyComponent
},
{
 path: 'ZooStoreComponent',
 component: ZooStoreComponent
},
{
  path: 'HolidayComponent',
  component: HolidayComponent
},
{
  path: 'SweetsComponent',
  component: SweetsComponent
},
{
  path: 'FruitsComponent',
  component: FruitsComponent
},
{
  path: 'VegetablesComponent',
  component: VegetablesComponent
},
{
  path: 'NutsComponent',
  component: NutsComponent
},
{
  path: 'CorbonateComponent',
  component: CorbonateComponent
},
{
  path: 'HerbalComponent',
  component: HerbalComponent
},
{
  path: 'WaterComponent',
  component: WaterComponent
},
{
  path: 'TeaCoffeeCacoaComponent',
  component: TeaCoffeeCacoaComponent
},
{
  path: 'CheesesComponent',
  component: CheesesComponent
},
{
  path: 'EggsComponent',
  component: EggsComponent
},
{
  path: 'MilkComponent',
  component: MilkComponent
},
{
  path: 'YoghurtsComponent',
  component: YoghurtsComponent
},
{
  path: 'FishComponent',
  component: FishComponent
},
{
  path: 'SeafoodComponent',
  component: SeafoodComponent
},
{
  path: 'CakesPastriesComponent',
  component: CakesPastriesComponent
},
{
  path: 'ChildrenLunchComponent',
  component: ChildrenLunchComponent
},
{
  path: 'LunchesComponent',
  component: LunchesComponent
},
{
  path: 'PnLunchComponent',
  component: PnLunchComponent
},
{
  path: 'DecorationComponent',
  component: DecorationComponent
},
{
  path: 'ChickenComponent',
  component: ChickenComponent
},
{
  path: 'MeatComponent',
  component: MeatComponent
},
{
  path: 'IceCreamComponent',
  component: IceCreamComponent
},
{
  path: 'DumplingsComponent',
  component: DumplingsComponent
},
{
  path: 'ContactsComponent',
  component: ContactsComponent
},
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
