import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelefonePage } from './telefone';

@NgModule({
  declarations: [
    TelefonePage,
  ],
  imports: [
    IonicPageModule.forChild(TelefonePage),
  ],
})
export class TelefonePageModule {}
