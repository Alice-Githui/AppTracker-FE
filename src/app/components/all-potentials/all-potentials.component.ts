import { Component, OnInit } from '@angular/core';
import {Potential} from '../../models/models/potential.model'
import { PotentialService } from 'src/app/services/potential/potential.service';


@Component({
  selector: 'app-all-potentials',
  templateUrl: './all-potentials.component.html',
  styleUrls: ['./all-potentials.component.css']
})
export class AllPotentialsComponent implements OnInit {
  all_potentials?:Potential[];
  

  constructor(private potentialService:PotentialService) { }

  ngOnInit(): void {
    this.allThePotentials();
  }

  allThePotentials(): void{
    this.potentialService.getAll()
    .subscribe(
      data =>{
        this.all_potentials = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

}


