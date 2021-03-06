import { Component, DoCheck } from "@angular/core";
/* Interface */
import { ListaTarefa } from "../../model/lista-tarefa";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements DoCheck {
  public listaTarefa: Array<ListaTarefa> = JSON.parse(localStorage.getItem("lista") || '[]');

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public apagaItemLista(event: number) {
    this.listaTarefa.splice(event, 1);
  }

  public apagaTudoLista() {
    const confirmar = window.confirm("Deseja realmente apagar tudo?");
    if (confirmar) {
      this.listaTarefa = [];
    }
  }

  public setarEmitLista(event: string) {
    this.listaTarefa.push({ lista: event, checked: false });
  }

  public validarEntradaLista(event: string, index: number) {
    if (!event.length) {
      const confirmar = window.confirm(
        "A sua tarefa está vazia, deseja excluir?"
      );
      if (confirmar) {
        this.apagaItemLista(index);
      }
    }
  }

  public setLocalStorage() {
    if(this.listaTarefa) {
      /* valores checados mudarão para parte de baixo da lista */
      this.listaTarefa.sort((first, last) => Number(first.checked) - Number(last.checked));
      /* localStorage (gravar os itens) deve ser atualizado depois do sort*/
      localStorage.setItem("lista", JSON.stringify(this.listaTarefa));
    }
  }
}
