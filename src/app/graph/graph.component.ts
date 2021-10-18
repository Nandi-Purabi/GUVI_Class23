import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Chart } from 'angular-highcharts';
import { Graph } from '../modal';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chartList:Array<Graph>=[];
  chartLength:number=0;
  clicks:number=0;

  highchart: Chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'A Visual Representation of Number of Clicks for each Generated Short URL'
    },
    credits: {
      enabled: false
    },
    series: [

    ]
  });

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.urlService.getAllUrl().subscribe((data) => {
      data.forEach((item) => {
        this.chartList.push({ "s_url": item.shortURL, "count": item.count })
        this.chartLength=this.chartLength+1;
        this.clicks=this.clicks+item.count;
      })
    })
  }
}
