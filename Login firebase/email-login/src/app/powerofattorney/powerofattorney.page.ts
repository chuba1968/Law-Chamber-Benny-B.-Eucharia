import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { browser } from 'protractor';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-powerofattorney',
  templateUrl: './powerofattorney.page.html',
  styleUrls: ['./powerofattorney.page.scss'],
})
export class PowerofattorneyPage implements OnInit {

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
   var url = 'https://paystack.com/pay/hqwgda-cja'
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
   var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/IndexhideAddress.html'
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
