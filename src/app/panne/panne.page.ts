import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.page.html',
  styleUrls: ['./panne.page.scss'],
})
export class PannePage implements OnInit {
  
  public monFormulaire: FormGroup;
  

  constructor(private formBuilder: FormBuilder,private toastController: ToastController) {
    this.monFormulaire = this.formBuilder.group({
      tel: ['', Validators.required],
      matricule: ['', Validators.required],
      dest: ['', Validators.required],
      personne: ['', Validators.required],
      gender: ['', ],
      
      marchandise: ['', ],
      message: ['', ],
    });
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Votre demande a été envoyé avec succès',
      duration: 3000,
      position: position,
      color:"success",
    });

    await toast.present();
  }


  public onSubmit(): void {
    if (this.monFormulaire.valid) {
      console.log('Formulaire valide :', this.monFormulaire.value);
    } else {
      console.log('Formulaire invalide.');
    }
  }
  onCancel() {
    this.monFormulaire.reset();
  }
  ngOnInit() {}

 

}
