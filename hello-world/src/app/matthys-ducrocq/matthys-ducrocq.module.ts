import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatthysDucrocqComponent } from 'src/app/matthys-ducrocq/matthys-ducrocq.component';
import { FormsModule } from '@angular/forms';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@NgModule({
  declarations: [MatthysDucrocqComponent],
  imports: [CommonModule, FormsModule],
  providers: [LaboratoireService],
  exports: [MatthysDucrocqComponent],
})
export class MatthysDucrocqModule {}
