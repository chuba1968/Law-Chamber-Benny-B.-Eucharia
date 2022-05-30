import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { browser } from 'protractor';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';





@Component({
  selector: 'app-proceedonemillion',
  templateUrl: './proceedonemillion.page.html',
  styleUrls: ['./proceedonemillion.page.scss'],
})
export class ProceedonemillionPage implements OnInit {

  //alert controller
  constructor(public alertController: AlertController,private browser:InAppBrowser) { }

 ngOnInit() {
 }

 showAlert() {

   this.alertController.create({
     header: 'Hide Company Address from the public',
     cssClass:'my-custom-class',
     subHeader: 'Do you want your Companies Residential address to be Private ?',
     message: 'If Yes, this attracts an Additional N30,000 Naira',

     buttons: ['OK']
   }).then(res => {

     res.present();

   });

 }


 openBrowser()
 {
   var url = 'https://paystack.com/pay/ezaz8v0n8c'
   var options: InAppBrowserOptions={
      zoom:'no',
     hardwareback:'yes',
     hideurlbar:'yes',
     hidenavigationbuttons:'yes',
     location:'yes',
     toolbarcolor:'#023e8a',
     fullscreen:'no',
     footer: 'yes',
     footercolor:'#ffffff',
     closebuttoncaption:'Close',
     closebuttoncolor: '#023e8a'
   }
   this.browser.create(url,'_blank',options);
 }


 openBrowserhideaddress()
 {
   var url = 'https://paystack.com/pay/y2y9mmingq'
   var options: InAppBrowserOptions={
    zoom:'no',
     hardwareback:'yes',
     hideurlbar:'yes',
     hidenavigationbuttons:'yes',
     location:'yes',
     toolbarcolor:'#023e8a',
     fullscreen:'no',
     footer: 'yes',
     footercolor:'#ffffff',
     closebuttoncaption:'Close',
     closebuttoncolor: '#023e8a'
   }
   this.browser.create(url,'_blank',options);

 }

 }
