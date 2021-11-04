import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  keyfirstName;
  firstname = "";

  constructor() { 
    this.getName();
  }

  private async getName(){

    const {value} = await Storage.get({
      key: this.keyfirstName
    })

    this.firstname = JSON.parse(value);
  }

  async onInput(event: any) {
    console.log(event.target.value);

    await Storage.set({
      key: this.keyfirstName,
      value: event.target.value,
    });

  }

}
