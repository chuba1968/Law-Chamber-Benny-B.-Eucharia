import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage {
  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }
  openBrowser()
{
  var url = 'https://evasupermax.com.ng/word/'
  var options: InAppBrowserOptions={
    zoom:'no',
    location:'no'
  }
  this.browser.create(url,'_blank',options);
}


}
