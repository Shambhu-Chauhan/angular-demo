import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RestoService} from '../resto.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean = false
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });
  
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collectResto() {
    //console.log();
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
    this.alert=true;
    this.addResto.reset({});
    console.log(this.alert);
    })
    
  }
  closeAlert() {
    this.alert=false
  }
}
