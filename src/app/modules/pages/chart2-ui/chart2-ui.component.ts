import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzImageService } from 'ng-zorro-antd/image';
import { interval } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProxiesService } from 'src/app/services/proxies/proxies.service';
import { DataService } from 'src/app/shared/data.service';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';
import { NotifyService } from 'src/app/shared/utils/notify';

@Component({
  selector: 'app-chart2-ui',
  templateUrl: './chart2-ui.component.html',
  styleUrls: ['./chart2-ui.component.css']
})
export class Chart2UIComponent implements OnInit {
  // @Input() reportDataExport!: TT01DataExport[];
  // @Input() title!: string;
  // @Input() seriesType!: string;

  getRandomColor(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }

  // commonSeriesSettings = {
  //   type: 'bar',
  //   animation: {
  //     enabled: true,
  //     duration: 10000,
  //     easing: 'easeOutCubic',
      
  //   }
  // };

  onPointClick(e: any) {
    e.target.select();
  }
  

  grossProductData: any[] = [{
    
    state: 'Illinois',
    year2016: 850,
    
  }, {
    state: 'Indiana',
    year2016: 316,
   
  },
  {
    state: 'aaa',
    year2016: 316,
   
  }  ];

  constructor(

    private dataService: DataService,
    private fb: FormBuilder, private authService: AuthService,
    private localStorageSv: LocalStorageService,
   
    private cdr: ChangeDetectorRef,
    private nzImageService: NzImageService,
    private http: HttpClient,
    private apiReport: ProxiesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService) {
    // this.authService.roleUser.subscribe(res => {
    //   this.roleUserCurrent = res;


    // });
    }

    colors: string = this.getRandomColor()
    intervalMs = 0.1 * 60 * 1000;
  ngOnInit(): void {
    interval(this.intervalMs).subscribe(() => {
            

            this.colors =  this.getRandomColor()

      
      

    });
    
    
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges()
  }

}
