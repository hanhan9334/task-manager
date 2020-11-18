import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  taskId: string;
  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
        this.listId = params.listId;
      });

  }

  updateTask(title: string) {
    this.taskService.updateTask(this.listId, this.taskId, title).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/lists', this.listId]);
    });


  }

}
