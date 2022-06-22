import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PexelPhotoService } from "src/app/services/pexel-photo.service";
import { img } from "./img";

@Injectable({ providedIn: 'root'})

export class FotoResolver implements Resolve<Observable<img[]>>{
    constructor(private service: PexelPhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<img[]> | Observable<Observable<img[]>> | Promise<Observable<img[]>> {
        const Pesquisa = route.params.Pesquisa
       
        throw new Error("Method not implemented.");
        
    }
}