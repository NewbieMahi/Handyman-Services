import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: any;
  name: any;

 
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;

  constructor(private authService: AuthService) {}

  title = 'Handyman';
  username: string = '';
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log("User fetched after login button",user);
      this.name = user.username;

    });

    //----------- chatbot's code --------------//
    (function (d, m) {
      var kommunicateSettings = {
        appId: "258ac35c50eac3cd4254bc70f5e37443a",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
    //----------- chatbot's code end --------------//

  }
  
  logout() {
    this.authService.currentUser.next(null);
  }
}
