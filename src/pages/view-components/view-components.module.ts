import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewComponentsPage } from './view-components';

@NgModule({
  declarations: [
    ViewComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewComponentsPage),
  ],
})
export class ViewComponentsPageModule {}
