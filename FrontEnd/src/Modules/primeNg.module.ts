import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { DataGridModule } from 'primeng/datagrid';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { TreeModule } from 'primeng/tree';
import { FieldsetModule } from 'primeng/fieldset';
import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
    imports: [
        AccordionModule,
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        DataGridModule,
        SplitButtonModule,
        SlideMenuModule,
        PanelMenuModule,
        MenuModule,
        TreeModule,
        FieldsetModule,
        SidebarModule,
        ScrollPanelModule,
        DialogModule,
        ListboxModule,
        StepsModule,
        InputTextModule,
        InputTextareaModule,
    ],
    declarations: [

    ],
    providers: [

    ],
    exports: [
        AccordionModule,
        PanelModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        ChartModule,
        DataGridModule,
        SplitButtonModule,
        SlideMenuModule,
        PanelMenuModule,
        MenuModule,
        TreeModule,
        FieldsetModule,
        SidebarModule,
        ScrollPanelModule,
        DialogModule,
        ListboxModule,
        StepsModule,
        InputTextModule,
        InputTextareaModule,

    ]
})
export class PrimeNgModule { }
