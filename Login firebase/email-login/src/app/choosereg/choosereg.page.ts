import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-choosereg',
  templateUrl: './choosereg.page.html',
  styleUrls: ['./choosereg.page.scss'],
})
export class ChooseregPage implements OnInit {

  //alert controller
  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  showAlert() {

    this.alertController.create({
      header: 'Type of Companies',
      cssClass:'my-custom-class',
      subHeader: 'Limited by shares',
      message: 'The higher the share capital the more CAC charges for registration',

      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

}
