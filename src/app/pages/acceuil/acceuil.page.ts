import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
 

  constructor(private alertController: AlertController,private animationCtrl: AnimationController) { }
  
  










  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async ppresentAlert() {
    const alert = await this.alertController.create({
      header: 'Vous êtes sûr de passer un appel d"urgence ?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Non',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'oui',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }




 


  ngOnInit() {
  }

}
















