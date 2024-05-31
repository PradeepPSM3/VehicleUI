import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle.model';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root'
  })
export class VehicleService {

  private hostURL = environment.apiURL+"/vehicles";

  httpOptions  =new HttpHeaders({'Content-type':'application/json'})
  
  
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.hostURL,{headers:this.httpOptions});
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.hostURL, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.hostURL}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.hostURL}/${id}`);
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.hostURL}/${id}`);
  }
}
