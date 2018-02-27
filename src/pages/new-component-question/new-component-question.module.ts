import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewComponentQuestionPage } from './new-component-question';

@NgModule({
  declarations: [
    NewComponentQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewComponentQuestionPage),
  ],
})
export class NewComponentQuestionPageModule {}
