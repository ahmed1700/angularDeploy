import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'grid-voting',
  templateUrl: './grid-voting.component.html',
  styleUrls: ['./grid-voting.component.css'],
})
export class GridVotingComponent {

  questions = [
    { id: 1, title: 'Angular is very important', vote: 0 },
    { id: 2, title: 'Express is very important', vote: 0 },
    { id: 3, title: 'SQL is very important', vote: 0 },
    { id: 4, title: 'GRAPHQL is very important', vote: 0 },
    { id: 5, title: 'C# is very important', vote: 0 },
  ];

  vote_click(id) {
    console.log(this.questions)
    for (let question of this.questions) {
      if (question.id === id) {
        question.vote++;
      }
    }
  }

}

