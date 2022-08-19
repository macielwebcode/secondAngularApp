import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponentComponent } from "./photo-component/photo-component.component";


@NgModule({
  declarations: [ PhotoComponentComponent ],
  exports: [ PhotoComponentComponent ],
  imports: [ HttpClientModule ]
})
export class PhotoModule{

}
