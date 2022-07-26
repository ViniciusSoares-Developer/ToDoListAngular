import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emmiterItemTask = new EventEmitter();

  public task: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList(): void {
    this.task = this.task.trim();
    if (this.task) {
      this.emmiterItemTask.emit(this.task);
      this.task = '';
    } else
      window.alert(
        'Não foi possivel adicionar a task, por favor atribua um valor valido a nova task'
      );
  }
}
