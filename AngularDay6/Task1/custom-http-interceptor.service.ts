import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptorService implements HttpInterceptor  {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // code to intercept the request
    console.log("message from http interceptor");
  
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40-test-security token';
    //  const hardcodedToken = sessionStorage.getItem("AUTH_TOKEN");
 
    // Generated modifed request object
    let updatedReq:HttpRequest<any> = req.clone({
     setHeaders: {
         Authorization: `Bearer ${hardcodedToken}`
     }
    });

    return next.handle(updatedReq)
   .pipe(
     // Retry on failure,  2 ---  two times
     retry(2),

     // Handle errors
     catchError((error: HttpErrorResponse) => {
       // TODO: Add error handling logic here
      // alert(`HTTP Error: ${req.url}`);
       console.log(`Error Message from HTTP Interceptor : ${req.url}, StatusCode : ${error.status} `);

      if(error.status === 404)
      {
        console.log("The requested resource could not be found");
      }
      else
      {
        console.log(error.message);
      }


      return throwError(() => new Error(error.message));
     })
   );

  };
  
 
}

