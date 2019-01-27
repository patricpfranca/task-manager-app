import { Component } from "@angular/core";
import { NSAngular2TokenService } from "./shared/ns-angular2-token/ns-angular2-token.service";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(
    private tokenService: NSAngular2TokenService
  ) {
    this.tokenService.init({
      apiBase: 'apiBase',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    })
  }
}
