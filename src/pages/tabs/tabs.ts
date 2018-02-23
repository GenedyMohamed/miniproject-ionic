import { Component } from '@angular/core';

import { Home } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Majors } from '../majors/majors';
import { SubscribePage} from '../subscribe/subscribe';
import { StoredetailsPage } from '../storedetails/storedetails';
import { StorescomponentsPage } from '../storescomponents/storescomponents';
import { ComponentDetailsPage } from '../component-details/component-details';
import { ViewComponentsPage } from '../view-components/view-components';
import { Courses } from '../courses/courses';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  //tab4Root: any = Majors;
  tab4Root: any = Courses;
  tab5Root: any = SubscribePage;
  tab6Root: any = StorescomponentsPage;
  tab7Root: any = ComponentDetailsPage;
  tab8Root: any = ViewComponentsPage;

  constructor() {
    
  }
}
