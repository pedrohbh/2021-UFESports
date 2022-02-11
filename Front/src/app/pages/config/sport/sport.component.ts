import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportService } from 'src/app/shared/services/sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  sports = [];
  sportForm: FormGroup;
  newSport: boolean = false;

  constructor(
    private sportService: SportService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formInit();
    this.listSport();
  }

  formInit() {
    this.sportForm = this.formBuilder.group({
      name: [null, [Validators.required]],
    });
  }

  async listSport() {
    const sports = await this.sportService.findAll(1,10);
    this.sports = sports[0];
  }

  async deleteSport(id) {
    try {
      await this.sportService.delete(id);
      alert("Excluimos o esporte conforme solicitado!");
      const index = this.sports.find(sport => sport.id == id);
      this.sports.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

  handleNewSport() {
    this.newSport = true;
  }

  cancelNewSport(){
    this.newSport = false;
    this.sportForm.reset();
  }

  async save(){
    if(this.sportForm.invalid){
      this.sportForm.markAllAsTouched();
      return;
    }

    const form = this.sportForm.value;

    const sport = {
      name: form.name
    }

    try {
      const sportSaved = await this.sportService.create(sport);
      alert("Esporte salvo com sucesso!");
      this.sports.push(sportSaved);
      this.newSport = false;
      this.sportForm.reset();
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
