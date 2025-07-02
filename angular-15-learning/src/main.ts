/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { RootApp } from './app/root-app';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/route-config';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageTranslateService } from './app/services/language-translate-service';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { authInterceptor } from './app/common/interceptors/fn/auth-interceptor';
import { basicHttpInterceptor } from './app/common/interceptors/fn/basic-http-interceptor';
import { cacheInterceptor } from './app/common/interceptors/fn/cache-interceptor';
import { globalErrorInterceptor } from './app/common/interceptors/fn/global-error-interceptor';
import { loggerInterceptor } from './app/common/interceptors/fn/logger-interceptor';
import { spinnerInterceptor } from './app/common/interceptors/fn/spinner-interceptor';
import { USER_TOKEN } from './app/common-tokens/user-token';
import { ServiceFive, ServiceFour, ServiceOne, ServiceThree, ServiceTwo } from './app/services/dummy-common-services';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(RootApp, {

    providers: [

        provideHttpClient(

            /*  Interceptors applied in defined order ,
                withInterceptors() automatically registers each interceptor as multi: true under HTTP_INTERCEPTORS
                multi: true is required to allow chaining multiple interceptors 
            */
            withInterceptors([
                basicHttpInterceptor, authInterceptor, cacheInterceptor, globalErrorInterceptor,
                loggerInterceptor, spinnerInterceptor
            ])
        ),

        provideRouter(routes),

        TranslateService,
        importProvidersFrom( //Register TranslateModule globally for i18n
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useClass: LanguageTranslateService, //Custom Translation Loader
                    deps: [HttpClient],
                },
            })
        ),

        // @Inject provides 'USER_TOKEN' globally
        { provide: USER_TOKEN, useValue: { id: 1, name: 'Arham', email: 'arham@example.com' } },

        // @Inject provides all services using token 'MULTI_SERVICES'
        { provide: 'MULTI_SERVICES', useClass: ServiceOne, multi: true },
        { provide: 'MULTI_SERVICES', useClass: ServiceTwo, multi: true },
        { provide: 'MULTI_SERVICES', useClass: ServiceThree, multi: true },
        { provide: 'MULTI_SERVICES', useClass: ServiceFour, multi: true },
        { provide: 'MULTI_SERVICES', useClass: ServiceFive, multi: true }
    ]
})
    .catch(err => console.error(err));
