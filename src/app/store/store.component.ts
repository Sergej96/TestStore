import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls:['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent {

}
