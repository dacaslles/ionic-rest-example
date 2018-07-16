import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider1Provider } from '../../providers/provider1/provider1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;
  constructor(public navCtrl: NavController, public provider: Provider1Provider) {

      
  }

  ionViewDidLoad(){
    this.provider.getData()
    .subscribe(
      (data)=>{this.users = data;},
      (error)=>{console.log(error);}
    );
  }

}
