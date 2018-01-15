import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { ITodo } from './../../interfaces/ITodo.interface';
import { TodoItemService } from './../../services/todo-item.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  providers: [TodoItemService]
})
export class TodoEditComponent implements OnInit {
  @Input()
  public todoId: number;
  public todo: ITodo;
  public urlId = this.activateRoute.snapshot.paramMap.get('todoId');


  @Output()
  public onSaveSuccess = new EventEmitter();


  constructor(
    private todoItemService: TodoItemService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.check();
    this.todoItemService.getItem(this.todoId)
    .then((todo) => {
      this.todo=todo;
    });
    console.log(this.todoId);
  }

  check() {
    if(this.urlId==="new") {
      this.todoId = this.todoItemService.addItem();
    }
    else {
      this.todoId = +this.urlId;
    }

  }


ngOnChanges(value: any) {
  this.todoItemService.getItem(this.todoId)
  .then((todo) => {
    this.todo=todo;
  });

}




  save () {
    if(this.todoId.toString()==='new') {
      this.todoItemService.addItem();
    } else {
      this.todoItemService.saveItem();
    }

    this.onSaveSuccess.emit();
  }

}
