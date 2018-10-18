import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas = [{nome: 'bla1', idade: 26, cpf: 6522},
            {nome: 'bla2', idade: 26, cpf: 323},
            {nome: 'bla3', idade: 26, cpf: 323},
            {nome: 'bla4', idade: 26, cpf: 424242}]
}
