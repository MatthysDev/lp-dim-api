import { Injectable } from '@angular/core';

@Injectable()
export class LaboratoireService {
  getLaboratoire(): any {
    return 'Service du laboratoire';
  }

  constructor() {}
}
