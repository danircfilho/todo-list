import { Component, DoCheck } from "@angular/core";
/* Interface */
import { ListaTarefa } from "../../model/lista-tarefa";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements DoCheck {
  public listaTarefa: Array<ListaTarefa> = [];

  constructor() {}

  ngDoCheck(): void {
    /* valores checados fmudarão para parte de baixo da lista */
    this.listaTarefa.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public apagaItemLista(event: number) {
    this.listaTarefa.splice(event, 1);
  }

  public apagaTudoLista() {
    const confirmar = window.confirm("Deseja Realmente Apagar Tudo?");
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
        "O Item da Lista Está Vazio, Deseja Excluir?"
      );
      if (confirmar) {
        this.apagaItemLista(index);
      }
    }
  }
}
