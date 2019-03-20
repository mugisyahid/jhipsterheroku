import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IStore } from 'app/shared/model/store.model';
import { StoreService } from './store.service';

@Component({
    selector: 'jhi-store-update',
    templateUrl: './store-update.component.html'
})
export class StoreUpdateComponent implements OnInit {
    store: IStore;
    isSaving: boolean;

    constructor(protected storeService: StoreService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ store }) => {
            this.store = store;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.store.id !== undefined) {
            this.subscribeToSaveResponse(this.storeService.update(this.store));
        } else {
            this.subscribeToSaveResponse(this.storeService.create(this.store));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IStore>>) {
        result.subscribe((res: HttpResponse<IStore>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
