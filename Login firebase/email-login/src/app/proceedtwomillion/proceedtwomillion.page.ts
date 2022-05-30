import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { browser } from 'protractor';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';




@Component({
  selector: 'app-proceedtwomillion',
  templateUrl: './proceedtwomillion.page.html',
  styleUrls: ['./proceedtwomillion.page.scss'],
})
export class ProceedtwomillionPage implements OnInit {

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
   var url = 'https://paystack.com/pay/551ixr300w'
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
   var url = 'https://paystack.com/pay/76-d6n5i6a'
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
