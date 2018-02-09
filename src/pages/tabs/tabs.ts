import { Component } from '@angular/core';

import { Home } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Majors } from '../majors/majors';
import { SubscribePage } from '../subscribe/subscribe';
import { ViewComponentsPage } from '../view-components/view-components';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = Majors;
  tab5Root: any = SubscribePage;
  tab6Root: any = ViewComponentsPage;


  constructor() {
    

  }
}
