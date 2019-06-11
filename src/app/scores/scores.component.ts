import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores: any;

  constructor(private quizService: QuizService) {
    this.quizService.getScores().subscribe(response => {
      this.scores = response;
    });

   }

  ngOnInit() {
  }

}
