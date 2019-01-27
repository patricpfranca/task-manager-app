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
      apiBase: 'http://10.0.3.3:3000',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    })

    this.tokenService.signIn({
      email: 'teste@teste.com.br',
      password: '123456'
    }).subscribe(res => console.dir(res));
  }
}
