import { Component, OnInit } from '@angular/core';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-matthys-ducrocq',
  templateUrl: './matthys-ducrocq.component.html',
  styleUrls: ['./matthys-ducrocq.component.scss'],
})
export class MatthysDucrocqComponent implements OnInit {
  prenom: string = 'Matthys';
  totos: string[] = ['toto', 'titi', 'tata'];
  labo: string;

  constructor(private _laboratoireService: LaboratoireService) {
    this.labo = this._laboratoireService.getLaboratoire();
  }
  public toto() {
    console.log(this._laboratoireService.getLaboratoire());
  }
  ngOnInit(): void {}
}
