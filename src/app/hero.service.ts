import { Injectable } from '@angular/core'; 
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add("HeroService: Fetched Heroes");
    return heroes;
  }
  getHero(id:number):Observable<Hero>{
    //zoek een specifieke hero a.d.h.v zijn ID.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id:${id}`);
    return of(hero);
  }
  constructor(private messageService:MessageService) { }
}
