import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Component({
  selector: 'app-simplewill',
  templateUrl: './simplewill.page.html',
  styleUrls: ['./simplewill.page.scss'],
})
export class SimplewillPage {

  //alert controller
  constructor() {
    Browser.addListener('browserPageLoaded', () =>{
      console.log('browserPageloaded event called');
    })

  Browser.addListener('browserFinished', () =>{
    console.log('browserFinished event called');
  })
  Browser.prefetch({
    urls:['https://paystack.com/pay/s7ynxx6svy']
  })
  }

  async openPage(){
  await Browser.open({ toolbarColor:"#023e8a", url:'https://paystack.com/pay/s7ynxx6svy'});
  }


  async SecondPage(){
    await Browser.open({ toolbarColor:"#023e8a", url:'https://paystack.com/pay/wvi-b09sgu'});
    }
}
