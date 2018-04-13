import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { Gd416Component } from './students/gd416/gd416.component';
import {routing} from "./app.routes";
import { BaseTemplateComponent } from './base-template/base-template.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { Arp73Component } from './students/arp73/arp73.component';
import { Cc922Component } from './students/cc922/cc922.component';
import { Bd389Component } from './students/bd389/bd389.component';
import { Apr46Component } from './students/apr46/apr46.component';
import { Amm211Component } from './students/amm211/amm211.component';
import { At766Component } from './students/at766/at766.component';
import { Aa2020Component } from './students/aa2020/aa2020.component';
import { Bis24Component } from './students/bis24/bis24.component';
import { Chb50Component } from './students/chb50/chb50.component';
import { Dtn23Component } from './students/dtn23/dtn23.component';
import { Dap54Component } from './students/dap54/dap54.component';
import { Hh476Component } from './students/hh476/hh476.component';
import { Jdc74Component } from './students/jdc74/jdc74.component';
import { Jsm85Component } from './students/jsm85/jsm85.component';
import { Jfe27Component } from './students/jfe27/jfe27.component';
import { Kas89Component } from './students/kas89/kas89.component';
import { Lar51Component } from './students/lar51/lar51.component';
import { Mm893Component } from './students/mm893/mm893.component';
import { Mb2035Component } from './students/mb2035/mb2035.component';
import { Mfbm3Component } from './students/mfbm3/mfbm3.component';
import { Ph485Component } from './students/ph485/ph485.component';
import { Paa39Component } from './students/paa39/paa39.component';
import { Rml52Component } from './students/rml52/rml52.component';
import { Slm70Component } from './students/slm70/slm70.component';
import { Sm2205Component } from './students/sm2205/sm2205.component';
import { Sp869Component } from './students/sp869/sp869.component';
import { Ttdsz2Component } from './students/ttdsz2/ttdsz2.component';
import { Vd283Component } from './students/vd283/vd283.component';
import { Vsm28Component } from './students/vsm28/vsm28.component';
import { Xk210Component } from './students/xk210/xk210.component';
import { Yg332Component } from './students/yg332/yg332.component';


@NgModule({
  declarations: [
    AppComponent,
    Gd416Component,
    BaseTemplateComponent,
    Arp73Component,
    Cc922Component,
    Bd389Component,
    Apr46Component,
    Amm211Component,
    At766Component,
    Aa2020Component,
    Bis24Component,
    Chb50Component,
    Dtn23Component,
    Dap54Component,
    Hh476Component,
    Jdc74Component,
    Jsm85Component,
    Jfe27Component,
    Kas89Component,
    Lar51Component,
    Mm893Component,
    Mb2035Component,
    Mfbm3Component,
    Ph485Component,
    Paa39Component,
    Rml52Component,
    Slm70Component,
    Sm2205Component,
    Sp869Component,
    Ttdsz2Component,
    Vd283Component,
    Vsm28Component,
    Xk210Component,
    Yg332Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
