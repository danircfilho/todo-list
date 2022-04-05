import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitListaTarefa = new EventEmitter()

  public adicionarItemLista: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submeterItemLista() {
    this.adicionarItemLista = this.adicionarItemLista.trim(); /* não considerar espaços em branco (remover) */
    if(this.adicionarItemLista) {
      this.emitListaTarefa.emit(this.adicionarItemLista)
      this.adicionarItemLista = ""; 
    }    
  }
}
