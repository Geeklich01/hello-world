import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent
{
  isActive = true;

  onSave()
  {
    console.log("Button was clicked");
  }
}
