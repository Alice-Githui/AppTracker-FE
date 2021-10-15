import { Component, OnInit } from '@angular/core';
import {Potential} from '../../models/models/potential.model';
import { PotentialService } from 'src/app/services/potential/potential.service';

@Component({
  selector: 'app-potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {
  new_potential:Potential={
    id: '',
    companyName: '',
    location:'',
    position:'',
    website:''

  };
  submitted = false;
  
  constructor(private potentialService:PotentialService) {  }

  ngOnInit(): void {
  }

  addNewJobPosition():void{
    const data={
      companyName: this.new_potential.companyName,
      position: this.new_potential.position,
      location:this.new_potential.location,
      website: this.new_potential.website
    };

    this.potentialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
