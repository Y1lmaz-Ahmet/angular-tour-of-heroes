import { Component,Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?:Hero
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    //Het route.snapshotis een statisch beeld van de route-informatie kort nadat het onderdeel is gemaakt.
    //Het paramMapis een woordenboek met routeparameterwaarden die uit de URL zijn geëxtraheerd.
    //De "id"sleutel geeft de sleutel terug idvan de held die moet worden opgehaald.
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

}
