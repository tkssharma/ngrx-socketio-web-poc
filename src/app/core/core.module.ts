import { NgModule, ModuleWithProviders } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common'
import { ApiService } from './services/api.service'
import { UtilsService } from './services/utils.service'
import { LoadingComponent } from './loading.component'
import { MaterialModule } from '../shared/material/material.module'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [LoadingComponent],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [Title, DatePipe, ApiService, UtilsService],
    }
  }
}
