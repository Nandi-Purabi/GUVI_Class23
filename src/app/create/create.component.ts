import { Component, Input, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { URL } from '../modal';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  longUrl:string="";
  shortUrl:string="";

  urlItem:URL={
    longURL:"",
    shortURL:"",
    count:0
  };

  constructor(private urlService:UrlService) { }

  ngOnInit(): void {
  }

  saveData(long:string,short:string){
    this.urlItem={
      "longURL":long,
      "shortURL":short,
      "count":0
    };
    this.urlService.saveUrl(this.urlItem).subscribe(()=>{
      alert("New URL Successfully Generated");
      this.shortUrl=""
    });
  }

  generate(){
    var char=this.longUrl;
    var charLen=char.length;

    for(let i=0;i<4;i++)
    {
      this.shortUrl += char.charAt(Math.floor(Math.random()*charLen));
    }
    this.saveData(this.longUrl,this.shortUrl)
  }

}
