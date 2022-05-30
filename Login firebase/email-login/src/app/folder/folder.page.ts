import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  userDetail: string;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,
    private ionicAuthService: IonicAuthService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })

  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }

  whatsapp() {
    { window.open('https://wa.me/07037705639'); }
  }



  fb() {
    { window.open('https://www.facebook.com/sharer/sharer.php?u=https://play.google.com/store/apps/details?id=io.Bennybony.app'); }
  }


  twit() {
    { window.open('https://twitter.com/LawyerIlobi?s=09'); }
  }
}
