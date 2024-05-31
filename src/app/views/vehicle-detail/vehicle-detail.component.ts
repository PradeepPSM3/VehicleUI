import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehiche.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicleDetail!:Vehicle

  constructor(private vehicleService: VehicleService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {  

    let id = this.activatedRoute.snapshot.params['id'];

    this.vehicleService.getVehicle(id).subscribe(response=>{
        this.vehicleDetail = response
    },error=>{
        this.router.navigateByUrl("notfound")
    })



  }

}
