import {Component, OnInit} from '@angular/core';
import {Phrase} from "../../shared/phrase";
import {PhrasesService} from "../../shared/phrases.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  private selectedId!: number;

  constructor(private phrasesService: PhrasesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params => {
        this.selectedId = +params['id'];

        this.phrasesService
          .getAllPhrases()
          .then(result => this.phrases = result)
      },
      error: err => console.log(err)
    })

  }

  onSelect(phrase: Phrase): void {
    this.router.navigate([phrase.id], {
      relativeTo: this.activatedRoute
    }).then()
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedId
  }

}
