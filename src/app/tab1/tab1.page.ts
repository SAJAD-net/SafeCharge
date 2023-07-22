import { Component } from '@angular/core';
//import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { BatteryStatus} from '@ionic-native/battery-status/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import _swal from 'sweetalert';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [BatteryStatus]
})

export class Tab1Page {
  subscription: any;
  level: any;
  plugged: any;
  safe_level: any;
  inputValue: number = 95;

  constructor( private batteryStatus: BatteryStatus) {}
  
  onBatteryStatus() {
   
    this.subscription = this.batteryStatus

      .onChange()
      .subscribe((status) => {
        this.level = status.level;
        if (status.isPlugged) {
          this.plugged = "Charging"
        }else {
          this.plugged = "Disconnected"
        }
        
        console.log('Level: ' + status.level + ' Is plugged: ' + status.isPlugged);
        // while (true){
        if (status.level == this.inputValue){
          var player = new Audio('assets/rem.mp3');
          player.play();
          _swal({
            title: "Safe Charge",
            text: `Reached the Safe Percentage ${this.inputValue}%`,
          }).then(function(){
              player.pause();
          })
        }
      });
  }
  // Unsubscribe subscription
  unsubscribeBatteryCheck() {
    this.subscription.unsubscribe();
  }

}
