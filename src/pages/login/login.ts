import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/RX';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginres: Observable<any>;
  loginCredentials = { LoginId: "", Password: "", HeaderInfo: {} };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private cookieService: CookieService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  cookieValue = 'UNKNOWN';
  public login() {

    this.cookieService.set('dough', 'AQIC5wM2LY4SfczZYFEihpJyU2ocuOTkwgZTWNK7q28Z2zY=@AAJTSQACMDcAAlMxAAIxMA==#', -1, '/', '.verizon.com');
    this.cookieService.set('pasta', 'c2gs381', -1, '/', '.verizon.com');
    this.cookieValue = this.cookieService.get('dough');

    console.log(this.cookieValue);
    this.navCtrl.setRoot(HomePage);


/*
    var HeaderInfo: any = {};
    HeaderInfo.SessionId = "sit-1234567890";
    HeaderInfo.UserSessionId = "1234567890";
    this.loginCredentials.HeaderInfo = HeaderInfo;

    var url: string;
    url = "https://www22.verizon.com/SimplexMS/Web/LeadListGatewaySvc/api/LeadList/GetAuthentication";

    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ method: RequestMethod.Post, headers: header })
    this.http.post(url, JSON.stringify(this.loginCredentials), options).subscribe(res => {
      this.cookieService.set('dough', 'AQIC5wM2LY4SfczZYFEihpJyU2ocuOTkwgZTWNK7q28Z2zY=@AAJTSQACMDcAAlMxAAIxMA==#', -1, '/', '.verizon.com');
      this.cookieService.set('pasta', 'c2gs381', -1, '/', '.verizon.com');
      this.cookieValue = this.cookieService.get('dough');

      console.log(this.cookieValue);
      this.navCtrl.setRoot(HomePage);
    });
  */
  }
  
}
