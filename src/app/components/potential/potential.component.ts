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
    CompanyName: '',
    position:'',
    website:''

  }

  constructor(private potentialService:PotentialService) { }

  ngOnInit(): void {
  }

  addNewJobPosition():void{
    const data={
      companyName: this.new_potential.CompanyName,
      position: this.new_potential.position,
      website: this.new_potential.website
    }
  }

}
