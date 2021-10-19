import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";
import { PageNotFoundComponent } from "./PageNotFound/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: 'extrato', component: ExtratoComponent},
    { path: 'nova-transferencia', component: NovaTransferenciaComponent},
    { path: '', redirectTo: 'nova-transferencia', pathMatch: 'full'}, // se for vazio vai redirecionar para extratp
    { path: '**', component: PageNotFoundComponent },  // se for alguma coisa aleatoria vai dar error 404 

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
)

export class AppRoutingModule{}