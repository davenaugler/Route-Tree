import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: "root"
})
export class RouteService {
  constructor(private http: HttpClient) {}

  
}
