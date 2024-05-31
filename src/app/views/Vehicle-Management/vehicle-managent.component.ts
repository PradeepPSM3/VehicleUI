import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehiche.service';

@Component({
  selector: 'app-vehicle-managent',
  templateUrl: './vehicle-managent.component.html',
  styleUrls: ['./vehicle-managent.component.scss']
})

export class VehicleManagentComponent implements OnInit {
  public vehicles: Vehicle[] = []; 

  public tempVehicles: Vehicle[] = []; 


  public formGroup: any;
  public showForms:boolean = false;
  public selectedVehicle!:Vehicle;
  public action:string ="";
  public searchValue:string = "";
  public error= "";
  public success="";



  constructor(private vehicleService: VehicleService, private builder:FormBuilder, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.getData()
  }

  getData() {
    this.vehicles=[];
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      this.tempVehicles= data;
      this.onSearch();
    });
  }
  initializeForm() {
      this.formGroup = this.builder.group({
        make: ['', Validators.required],
        model: ['', Validators.required],
        year: ['', [Validators.required, Validators.min(2000),Validators.max(2024)]],
        vin: ['', [Validators.required]]
      });

      this.showForms = true;
  }


  onSubmit(){

    let vehicle: Vehicle ={
      make:this.formGroup.controls["make"].value,
      vin:this.formGroup.controls["vin"].value,
      model:this.formGroup.controls["model"].value,
      year:this.formGroup.controls["year"].value
    };

    if(this.action=="Add"){
        this.vehicleService.addVehicle(vehicle).subscribe(response=>{
          this.success = "Vehicle record created successFully";
          this.getData();
          //this.vehicles.push(response);
          this.resetBanner();
        },exception=>{
          this.resetBanner();
          this.error = exception.error.message;
          
        })
    }else{

      let id:any = this.selectedVehicle.id;
      this.vehicleService.updateVehicle(id,vehicle).subscribe(response=>{
        this.success = "Vehicle record updated successFully";
        this.getData();
        this.resetBanner();
      },exception=>{
        this.resetBanner();
        this.error = exception.error.message;
        
      })
    }

  }

  onSearch(){

    let searchValue:string = this.searchValue
    console.log(searchValue);

    if(searchValue === null || searchValue===""|| !searchValue){
      this.vehicles = JSON.parse(JSON.stringify(this.tempVehicles));
    }else{

      this.vehicles = this.tempVehicles.filter(response=>{
        return this.validateMethod(response.make,searchValue) || this.validateMethod(response.model,searchValue) 
        || this.validateMethod(response.vin,searchValue) || this.validateMethod(response.year+'',searchValue)
      })
    }
  }


  validateMethod(response:string,searchValue:string):Boolean{
    return  response.toLocaleLowerCase().indexOf(searchValue)!=-1;
  }

  onEdit(vehicle:Vehicle){
    this.action= "Edit"

    this.selectedVehicle =  vehicle;
    this.formGroup.patchValue({
       make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        vin: vehicle.vin
    })

  }

  resetBanner(){
setTimeout(()=>{
  
    this.error="";
    this.success="";

},3000)

  }

  onDelete(vehicle:Vehicle){

    this.selectedVehicle = vehicle;
    this.resetBanner();

  }

  onDeleteVehicle(){
    let id:any = this.selectedVehicle.id;
    this.vehicleService.deleteVehicle(id).subscribe(response=>{
      this.success = "Vehicle record deleted successFully";
      this.getData();
    },exception=>{
      this.error = exception.error.message;
    })
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
    });

  }


  addVehicle(){
    this.action="Add";
  }

  checkValue(group:any){

    console.log(group)
  }


  resetForm(){

    this.formGroup.reset();

  }
}