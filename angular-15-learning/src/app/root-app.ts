import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SHARED_IMPORTS } from './shared-module-imports';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PreLoadService } from './services/pre-load-service';

@Component({
    selector: 'root-app',
    templateUrl: './root-app.html',
    styleUrls: ['./root-app.css'],
    standalone: true,
    imports: [SHARED_IMPORTS]
})
export class RootApp implements OnInit, AfterViewInit {

    engLang: boolean = true;

    constructor(private languageService: TranslateService, private router: Router, 
        private preLoadService: PreLoadService) {
        
        this.languageService.setDefaultLang('en');
        this.languageService.use('en');
    }

    public changeLanguage(lang: boolean) {

        if (lang) 
            this.languageService.use('hi');
        else
            this.languageService.use('en');
        
        this.engLang = !this.engLang;
        
        //this.languageService.use(event.target.value);
    }

    ngOnInit(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe((event: any) => {
                console.log('Navigation-Started: ', event.url);
            });
    }

    ngAfterViewInit(): void {
        
        setTimeout(() => {
            this.preLoadService.load(); //Lazy components will preload in background
        }, 5000); // slight delay to not block main app initial loading
    }
}
