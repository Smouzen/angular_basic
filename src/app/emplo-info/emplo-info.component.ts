import { Component ,OnInit} from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-emplo-info',
  templateUrl: './emplo-info.component.html',
  styleUrls: ['./emplo-info.component.scss'],
  providers :[RecordsService] //Create instance of the service class

})
export class EmploInfoComponent  implements OnInit{

  infoRecieved1: String[]=[];
  infoRecieved2: String[]=[];
  infoRecieved3: String[]=[];

  //getting the info and pass it to infoReceived array
  getInfoFromServiceClass1(){
    this.infoRecieved1 = this.rservice.getInfo1()
  }
  getInfoFromServiceClass2(){
    this.infoRecieved2 = this.rservice.getInfo2()
  }
  getInfoFromServiceClass3(){
    this.infoRecieved3 = this.rservice.getInfo3()
  }
 
  //access the instance
  constructor(private rservice: RecordsService){ }

   ngOnInit(): void{
    
   }
  
}
