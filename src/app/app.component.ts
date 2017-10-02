import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Lesson 73
  task = {
    title: 'Review applications',
    assignee: null
  }

  // Lesson 72
  // canSave = false;

  // Lesson 69
  // courses;

  // loadCourses()
  // {
  //   this.courses = [
  //     { id: 1, name: 'course1' },
  //     { id: 2, name: 'course2' },
  //     { id: 3, name: 'course3' },
  //   ];
  // }

  // trackCourse(index, course)
  // {
  //   return course ? course.id : undefined;
  // }

  // Code used for lesson 67 - 68
  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' },
  // ];

  // onAdd()
  // {
  //   this.courses.push({ id:4, name: 'course4' });
  // }

  // onRemove(course)
  // {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // Code used for lesson 66
  // viewMode = 'map';

  // Code used for lesson 64
  // courses = [1];
  
  /// Code used for Assignment 4
  // tweet = {
  //   body: 'her is the body...',
  //   likesCount: 10,
  //   isLiked: true
  // }

  /// Code used for lessons 51 - 62
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs )
  // {
  //   console.log("Favorite changed: ", eventArgs);
  // }
  // title: string;  ++ Solution to A3 - Title Casing
  // title = 'Angular';  ++  Commented out for the A3 - Title Casing
}
