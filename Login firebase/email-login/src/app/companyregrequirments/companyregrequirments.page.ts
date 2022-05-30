import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-companyregrequirments',
  templateUrl: './companyregrequirments.page.html',
  styleUrls: ['./companyregrequirments.page.scss'],
})
export class CompanyregrequirmentsPage implements OnInit {

// Code for the InappBrowser
  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  openBrowser()
  {
    var url = 'https://paystack.com/pay/46p3pu2uhg/'
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
