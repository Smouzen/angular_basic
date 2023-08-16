import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
 info1: String[]= ["Smous Tlotang","Spu12123","tl@spu.ac.za"]
 info2: String[]= ["Selke Tlotlo","Spu23456","ts@spu.ac.za"]
 info3: String[]= ["Motabogi Kgosi","Spu12098","kg@spu.ac.za"]

 getInfo1():String[]{
 
  return this.info1
 }
 getInfo2():String[]{
 
  return this.info2
 }
 getInfo3():String[]{
 
  return this.info3
 }
  constructor() { }
}
