import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PhrasesService} from "./phrases.service";
import {Phrase} from "./phrase";

@Injectable({
  providedIn: 'root'
})
export class PhraseDetailsResolver implements Resolve<Phrase | boolean> {
  constructor(private phrasesService: PhrasesService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Phrase | boolean> | Promise<Phrase | boolean> {
    const id = +route.params['id']

    if (isNaN(id)) this.emptyNavigate()

    return this.phrasesService.getPhrase(id).then((phrase: Phrase | undefined) => {
      if (phrase) return phrase

      this.emptyNavigate()
      return false
    });
  }

  private emptyNavigate(): void {
    this.router.navigate(['/phrases']).then()
  }
}
