import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //TODO <---
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('[Item List] Load items'),
        mergeMap(() => this.showCaseService.getDataApi()//TODO Retorna la data [...]
            .pipe(
                map(items => ({ type: '[Item List] Loaded success', items })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private showCaseService: ShowCaseService
    ) { }
}