import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CookieService } from 'ng2-cookies'

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  inAppBrowserRef: any;
  cookieValue = 'UNKNOWN';
  constructor(public navCtrl: NavController, private theInAppBrowser: InAppBrowser, private cookieService: CookieService) {
    console.log(this.cookieValue);

    this.cookieService.set('dough', 'AQIC5wM2LY4SfczZYFEihpJyU2ocuOTkwgZTWNK7q28Z2zY=@AAJTSQACMDcAAlMxAAIxMA==#');
    this.cookieService.set('pasta', 'c2gs381');
    this.cookieValue = this.cookieService.get('dough');

    console.log(this.cookieValue);
  }

  public openWithSystemBrowser(url: string) {
    var inAppBrowserRef;
    let target = "_system";
    inAppBrowserRef = this.theInAppBrowser.create(url, target, this.options);


    const watch = inAppBrowserRef.on('loadstart').subscribe(type => {
      alert(target);
    });
  }
  public openWithInAppBrowser(url: string) {
    var inAppBrowserRef1;
    let target = "_blank";
    inAppBrowserRef1 = this.theInAppBrowser.create(url, target, this.options);


    const watch = inAppBrowserRef1.on('loadstart').subscribe(type => {
      //alert(this.cookieValue);

      var scriptErrorMesssage =
        'document.cookie = dough="' + this.cookieValue + '"; var x = document.cookie; alert(x);';

      //inAppBrowserRef1.executeScript({ code: scriptErrorMesssage }, this.executeScriptCallBack);
    });

    const watch1 = inAppBrowserRef1.on('loadstop').subscribe(type => {
      //alert(this.cookieValue);

      var scriptErrorMesssage =
        'document.cookie = dough="' + this.cookieValue + '"; var x = document.cookie; alert(x);';

        var scriptErrorMesssage1 =
        'var x = document.cookie; alert(x);';

      inAppBrowserRef1.executeScript({ code: scriptErrorMesssage1 });
    });

    //inAppBrowserRef.addEventListener('loadstart', this.loadStartCallBack());

    //inAppBrowserRef.addEventListener('loadstop', this.loadStopCallBack());

    //inAppBrowserRef.addEventListener('loaderror', this.loadErrorCallBack);
  }
  public openWithCordovaBrowser(url: string) {
    var inAppBrowserRef;
    let target = "_self";
    inAppBrowserRef = this.theInAppBrowser.create(url, target, this.options);

    const watch = inAppBrowserRef.on('loadstart').subscribe(type => {
      //alert(target);
      this.loadStartCallBack();
    });
  }

  public loadStartCallBack() {
    alert("loading please wait ...");
    //$('#status-message').text("loading please wait ...");

  }

  public loadStopCallBack() {

    if (this.inAppBrowserRef != undefined) {

      this.inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

      alert("loading completed...");
      //$('#status-message').text("");

      this.inAppBrowserRef.show();
    }

  }

  public loadErrorCallBack(params) {

    alert("Sorry we cannot open that page. Message from the server is  ...");
    //$('#status-message').text("");

    var scriptErrorMesssage =
      "alert('Sorry we cannot open that page. Message from the server is : "
      + params.message + "');"

    this.inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, this.executeScriptCallBack);

    this.inAppBrowserRef.close();

    this.inAppBrowserRef = undefined;

  }

  public executeScriptCallBack(params) {

    if (params[0] == null) {
      alert("Sorry we couldn't open that page. ...");
      //$('#status-message').text("Sorry we couldn't open that page. Message from the server is : '" + params.message + "'");
    }

  }
}
