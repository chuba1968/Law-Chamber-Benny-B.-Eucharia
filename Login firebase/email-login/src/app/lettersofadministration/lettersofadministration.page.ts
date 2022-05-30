import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-lettersofadministration',
  templateUrl: './lettersofadministration.page.html',
  styleUrls: ['./lettersofadministration.page.scss'],
})
export class LettersofadministrationPage implements OnInit {

// Code for the InappBrowser
constructor(private browser:InAppBrowser) { }

ngOnInit() {
}

openBrowser()
{
  var url = 'https://fbiforms.web.app/PracticeAreas/Letters%20of%20Administration/'
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
