import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'store',
                loadChildren: './store/store.module#JhipstermarketStoreModule'
            },
            {
                path: 'store',
                loadChildren: './store/store.module#JhipstermarketStoreModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#JhipstermarketProductModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#JhipstermarketProductModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstermarketEntityModule {}
