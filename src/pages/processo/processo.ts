import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProcessoService } from '../../service/processo.service';
import { Processo } from '../../model/processo';


@IonicPage()
@Component({
  selector: 'page-processo',
  templateUrl: 'processo.html',
})
export class ProcessoPage {
  processos: Processo[];

  processoPage:Processo[] = [];
  page: number = 0;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: ProcessoService,
              public loading: LoadingController) {
  }

  ionViewDidLoad() {
    this.getProcessos();
  }

  getProcessos(){
    this.service.getProcessos()
    .subscribe(response => {
      this.processos =  response;
      this.addPage();
    });
  }

  addPage(){
    for(var i = 0; i<10; i++){
      this.processoPage.push(this.processos[this.page]);
      this.page++;
    }
    console.log(this.processoPage);
  }

  doRefresh(refresher) {
    this.processoPage = [];

    setTimeout(() => {
      this.getProcessos();
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.addPage();
      infiniteScroll.complete();
    }, 500);
  }

  
}
