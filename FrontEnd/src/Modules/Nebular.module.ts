import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbAccordionModule,
    NbListModule,
    NbSidebarModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbButtonModule,
    NbCalendarModule,
    NbAlertModule,
    NbCheckboxModule,
    NbStepperModule,
    NbInputModule,
    NbSelectModule
} from '@nebular/theme';


@NgModule({
    imports: [
        CommonModule,
        NbActionsModule,
        NbCardModule,
        NbLayoutModule,
        NbMenuModule,
        NbRouteTabsetModule,
        NbSearchModule,
        NbSidebarModule,
        NbTabsetModule,
        NbThemeModule,
        NbUserModule,
        NbButtonModule,
        NbCalendarModule,
        NbAlertModule,
        NbCheckboxModule,
        NbAccordionModule,
        NbStepperModule,
        NbInputModule,
        NbSelectModule
    ],
    declarations: [],
    exports: [
        NbActionsModule,
        NbCardModule,
        NbLayoutModule,
        NbMenuModule,
        NbRouteTabsetModule,
        NbSearchModule,
        NbSidebarModule,
        NbTabsetModule,
        NbThemeModule,
        NbUserModule,
        NbButtonModule,
        NbCalendarModule,
        NbAlertModule,
        NbCheckboxModule,
        NbAccordionModule,
        NbStepperModule,
        NbInputModule,
        NbSelectModule
    ]
})
export class NebularModule { }
