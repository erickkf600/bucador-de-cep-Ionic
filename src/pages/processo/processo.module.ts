import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcessoPage } from './processo';

@NgModule({
  declarations: [
    ProcessoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcessoPage),
  ],
})
export class ProcessoPageModule {}
