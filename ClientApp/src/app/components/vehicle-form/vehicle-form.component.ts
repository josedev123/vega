import { VehicleService } from '../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  vehicle: any = {};
  features: any[];
  selectedMake;
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
    }
    );
    this.vehicleService.getFeatures().subscribe(features => this.features = features);
  }

  onMakeChange() {
 // tslint:disable-next-line:triple-equals
 this.selectedMake = this.makes.find(x => x.id == this.vehicle.make);
 this.models = this.selectedMake ? this.selectedMake.models : [];
  }


}
