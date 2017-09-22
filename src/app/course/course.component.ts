import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent
{
  isActive = true;
  email = "me@example.com";

  // onKeyUp($event)
  // onKeyUp()
  onKeyUp()
  {
    // if ($event.keyCode === 13) -- commented for another implementation
    // console.log("ENTER was pressed"); -- commented to try getting values from input event
    console.log(this.email);
    
  }

  onDivClicked()
  {
    console.log("Div was clicked");
  }

  onSave($event)
  {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
}
