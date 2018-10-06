import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
    imports: [
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        SplitButtonModule,
        SlideMenuModule,
        PanelMenuModule,
        MenuModule,
        SidebarModule,
        DialogModule,
        ListboxModule,
        InputTextModule,
        InputTextareaModule,
    ],
    declarations: [

    ],
    providers: [

    ],
    exports: [
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        SplitButtonModule,
        SlideMenuModule,
        PanelMenuModule,
        MenuModule,
        SidebarModule,
        DialogModule,
        ListboxModule,
        InputTextModule,
        InputTextareaModule
    ]
})
export class PrimeNgModule { }
