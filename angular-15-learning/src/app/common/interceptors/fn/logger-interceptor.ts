import { HttpEvent, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {

    console.log('Req url: ', req.url);

    return next(req).pipe(
    
        // tap logs response
        tap((event: HttpEvent<any>) => {

            if (event instanceof HttpResponse) {
                console.log('Status: ', event.status);              // e.g., 200
                //console.log('Body: ', event.body);                  // Full response body
                //console.log('Headers: ', event.headers.keys());     // Header keys
                //console.log('URL: ', event.url);                    // Final response URL
            }
        }) 
            
    );
};
