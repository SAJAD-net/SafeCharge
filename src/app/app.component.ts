import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private backgroundMode: BackgroundMode
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.backgroundMode.enable();
    });
  }
} 