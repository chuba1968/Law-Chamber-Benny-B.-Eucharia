import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { browser } from 'protractor';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-criminaldefence',
  templateUrl: './criminaldefence.page.html',
  styleUrls: ['./criminaldefence.page.scss'],
})
export class CriminaldefencePage implements OnInit {

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
   var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/'
   var options: InAppBrowserOptions={
     zoom:'no',
     location:'no',
     footer: 'yes',
     footercolor:'#ffffff',
     closebuttoncaption:'Close',
     fullscreen:'no',
     closebuttoncolor: '#023e8a'
   }
   this.browser.create(url,'_blank',options);
 }


 openBrowserhideaddress()
 {
   var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/IndexhideAddress.html'
   var options: InAppBrowserOptions={
     zoom:'no',
     location:'no',
     footer: 'yes',
     footercolor:'#ffffff',
     closebuttoncaption:'Close',
     fullscreen:'no',
     closebuttoncolor: '#023e8a'
   }
   this.browser.create(url,'_blank',options);

 }

 }
