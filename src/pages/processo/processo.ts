import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessoService } from '../../service/processo.service';
import { Processo } from '../../model/processo';


@IonicPage()
@Component({
  selector: 'page-processo',
  templateUrl: 'processo.html',
})
export class ProcessoPage {
  processos: Processo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProcessoService) {
  }
  
  ionViewDidLoad() {
    this.service.getProcessos()
    .subscribe(response => {
      this.processos =  response;
      //console.log(this.processos);
    });
  }

}
