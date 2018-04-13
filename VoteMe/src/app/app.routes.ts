import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Gd416Component} from "./students/gd416/gd416.component";
import {Arp73Component} from "./students/arp73/arp73.component";
import {Bd389Component} from "./students/bd389/bd389.component";
import {Cc922Component} from "./students/cc922/cc922.component";
import {Apr46Component} from "./students/apr46/apr46.component";
import {Yg332Component} from "./students/yg332/yg332.component";
import {Xk210Component} from "./students/xk210/xk210.component";
import {Vsm28Component} from "./students/vsm28/vsm28.component";
import {Vd283Component} from "./students/vd283/vd283.component";
import {Ttdsz2Component} from "./students/ttdsz2/ttdsz2.component";
import {Sp869Component} from "./students/sp869/sp869.component";
import {Sm2205Component} from "./students/sm2205/sm2205.component";
import {Slm70Component} from "./students/slm70/slm70.component";
import {Rml52Component} from "./students/rml52/rml52.component";
import {Paa39Component} from "./students/paa39/paa39.component";
import {Ph485Component} from "./students/ph485/ph485.component";
import {Mfbm3Component} from "./students/mfbm3/mfbm3.component";
import {Mb2035Component} from "./students/mb2035/mb2035.component";
import {Mm893Component} from "./students/mm893/mm893.component";
import {Lar51Component} from "./students/lar51/lar51.component";
import {Kas89Component} from "./students/kas89/kas89.component";
import {Jfe27Component} from "./students/jfe27/jfe27.component";
import {Jsm85Component} from "./students/jsm85/jsm85.component";
import {Jdc74Component} from "./students/jdc74/jdc74.component";
import {Hh476Component} from "./students/hh476/hh476.component";
import {Dap54Component} from "./students/dap54/dap54.component";
import {Dtn23Component} from "./students/dtn23/dtn23.component";
import {Chb50Component} from "./students/chb50/chb50.component";
import {Bis24Component} from "./students/bis24/bis24.component";
import {Aa2020Component} from "./students/aa2020/aa2020.component";
import {At766Component} from "./students/at766/at766.component";
import {Amm211Component} from "./students/amm211/amm211.component";

// Route Configuration
export const routes: Routes = [
  { path: 'gd416', component: Gd416Component },
  { path: 'arp73', component: Arp73Component },
  { path: 'bd389', component: Bd389Component },
  { path: 'cc922', component: Cc922Component },
  { path: 'apr46', component: Apr46Component },
  { path: 'amm211', component: Amm211Component },
  { path: 'at766', component: At766Component },
  { path: 'aa2020', component: Aa2020Component },
  { path: 'bis24', component: Bis24Component },
  { path: 'chb50', component: Chb50Component },
  { path: 'dtn23', component: Dtn23Component },
  { path: 'dap54', component: Dap54Component },
  { path: 'hh476', component: Hh476Component },
  { path: 'jdc74', component: Jdc74Component },
  { path: 'jsm85', component: Jsm85Component },
  { path: 'jfe27', component: Jfe27Component },
  { path: 'kas89', component: Kas89Component },
  { path: 'lar51', component: Lar51Component },
  { path: 'mm893', component: Mm893Component },
  { path: 'mb2035', component: Mb2035Component },
  { path: 'mfbm3', component: Mfbm3Component },
  { path: 'ph485', component: Ph485Component },
  { path: 'paa39', component: Paa39Component },
  { path: 'rml52', component: Rml52Component },
  { path: 'slm70', component: Slm70Component },
  { path: 'sm2205', component: Sm2205Component },
  { path: 'sp869', component: Sp869Component },
  { path: 'ttdsz2', component: Ttdsz2Component },
  { path: 'vd283', component: Vd283Component },
  { path: 'vsm28', component: Vsm28Component },
  { path: 'xk210', component: Xk210Component },
  { path: 'yg332', component: Yg332Component }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
