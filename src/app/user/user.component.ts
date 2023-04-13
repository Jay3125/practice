import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data: number = 112000.2500;
  title = "Hello user"
  date = Date()
  user = {
    name: 'Jass',
    ae :23,
}

  val(item: any)
  {
    console.log(item);
  }

}
