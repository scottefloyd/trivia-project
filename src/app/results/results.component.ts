import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  newUserScore: any;
  questions: any;
  currentuser: any;
  newScore: any;

  constructor(private quizService: QuizService) {

    // this.quizService.getQuestions().subscribe(response => {
    //   this.questions = response;
    // });



    // this.quizService.getCurrentUserScore().subscribe(response => {
    //   this.currentuser = response;
    // });
   }

  ngOnInit() {
    
    this.questions = this.quizService.getUserQuestions();

    //console.log(this.questions);
    

    this.currentuser = this.quizService.getUser();
    this.newScore = this.quizService.getScore();
    
    
  }

}
