import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentDetailsPage } from './component-details';

@NgModule({
  declarations: [
    ComponentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentDetailsPage),
  ],
})
export class ComponentDetailsPageModule {}
