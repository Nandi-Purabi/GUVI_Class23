import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { URL } from '../modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  urlList: Array<URL> = [];
  urlItem: URL = {
    longURL: "",
    shortURL: "",
    count: 0
  }

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.urlService.getAllUrl().subscribe((data) => {
      this.urlList = data;
    })
  }

  inc(id?:number) {
    this.urlService.getAllUrl().subscribe((data) => {
      data.forEach((item) => {
        if (item.id === id) {
          this.urlItem = {
            "longURL": item.longURL,
            "shortURL": item.shortURL,
            "count": item.count + 1
          }
          this.urlService.updateCount(this.urlItem, id).subscribe((data) => {
            this.ngOnInit();
            console.log(data);
          });
        }
      })
    })
  }

}

