import { Component, Input, OnInit } from '@angular/core';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router,
} from '@angular/router';
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
    @Input()
    enableRoutingLoading: boolean = false;
    constructor(public loadingService: LoadingService, public router: Router) {
      this.loadingService.loading$.subscribe(x=>{
        console.log(x);
      })
    }

    ngOnInit(): void {
        if (this.enableRoutingLoading) {
            this.router.events.subscribe((event) => {
                if (
                    event instanceof NavigationStart ||
                    event instanceof RouteConfigLoadStart
                ) {
                    this.loadingService.showLoading();
                } else if (
                    event instanceof NavigationEnd ||
                    event instanceof RouteConfigLoadEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError
                ) {
                    this.loadingService.hideLoading();
                }
            });
        }
    }
}
