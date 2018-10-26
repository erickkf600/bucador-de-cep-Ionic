import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelefoneService } from '../../service/telefone.service';
import { Telefone } from '../../model/telefone';

@IonicPage()
@Component({
  selector: 'page-telefone',
  templateUrl: 'telefone.html',
})
export class TelefonePage {

  telefones: Telefone[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: TelefoneService) {
  }

  ionViewDidLoad() {
    this.service.getTelefones()
    .subscribe(response => {
      this.telefones =  response;
      console.log(this.telefones);
    });
  }

}
