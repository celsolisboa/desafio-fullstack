import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        PanelMenuModule,
        MenuModule,
        SidebarModule,
        DialogModule,
        ListboxModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
    ],
    declarations: [

    ],
    providers: [

    ],
    exports: [
        CommonModule,
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        PanelMenuModule,
        MenuModule,
        SidebarModule,
        DialogModule,
        ListboxModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
    ]
})
export class PrimeNgModule { }
