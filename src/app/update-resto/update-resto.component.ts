import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.log("result",result);
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
      });
    })
  }
  collectResto() {
     console.log(this.editResto.value);
     this.resto.updateresto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
       console.log(result)
       this.alert = true; 
     })
   }
   closeAlert() {
    this.alert = false;
   }
}
