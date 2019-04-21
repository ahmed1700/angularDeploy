import { Component ,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {
   tiltle ="Parent Componet";
  constructor() {
    this.populateCourses();

  }
  courses: any[];
  counter: number = 1;
  add() {
    this.courses.push({ id: 4, courseName: 'Course ' + this.counter++ });
    console.log(this.courses);
  }
  populateCourses() {
    return this.courses =
      [
   
      ]
  }
  showCourses() {
    return this.courses;
  }
  remove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index , 1);
    console.log(this.courses);
  }

  trackByCourse(index ,course ){
      //  if (course) {
      //         return course.id;
      //  }
      //  else
      //  {
      //    return undefined;
      //  }
       return course ? course.id : undefined;
  }
}
