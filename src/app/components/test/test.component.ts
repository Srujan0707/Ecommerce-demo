import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

result:any;
finalResult:any;
  constructor( private testService:TestService) { }

  ngOnInit(): void {
    this.testService.getApiDetails().subscribe((data => {
      this.result = data;
      //console.log("CONSOLE == " + JSON.stringify(this.result));
      this.finalResult = this.result.results
      console.log("CONSOLE == " + JSON.stringify(this.finalResult));
    }
      ));

    
  }

}
