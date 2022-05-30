import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-getlegalservices',
  templateUrl: './getlegalservices.page.html',
  styleUrls: ['./getlegalservices.page.scss'],
})
export class GetlegalservicesPage implements OnInit {

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {
  }

  openBrowser()
  {
    var url = 'https://fbiforms.web.app/'
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
