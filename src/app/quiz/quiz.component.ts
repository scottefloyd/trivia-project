import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any;
  //answerTally: number = 0;
  username: string;
  quizStarted: boolean;
  //finalscore: any;
  userscore: any;
  //scoreArray: any[] = [];
  count: any = 0;

  constructor(private quizService: QuizService) {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      this.quizService.setUserQuestions(this.questions);
    });
  }

  ngOnInit() {}

  startQuiz(form) {
    this.username = form.value.name;
    this.quizStarted = !this.quizStarted;

  }

  setUserName(form) {

    this.username = form.value.name;
    console.log(this.username);
    
    this.quizService.setUser(this.username);

  }

  // checkCorrect(choice: any, answer: any, index): any {
  //   if (choice === answer) {
  //     this.answerTally++;
  //   }
  //   console.log(this.scoreArray);
    
  //     this.scoreArray.push(index);


  //     for (let i = 0; i < this.scoreArray.length; i++){
  //       if (this.scoreArray[i] == 2) {
  //         this.answerTally--;
  //       }
  //       console.log(this.answerTally);
        
  //     }
    
  // }


  submitQuiz(form) {
    
    this.quizService.setScores(form, this.questions);
   




    // this.quizService
    //   .submitScore({
    //     username: this.username,
    //     score: this.answerTally
    //   })
    //   .subscribe(response => {
    //     this.userscore = response;
    //     this.router.navigate(["results"]);
    //   });
    // this.quizService.setUserQuestions(this.questions);
    // this.quizService.setUserScore({
    //   username: this.username,
    //   score: this.answerTally
    // });
    
    
  }


  // sendQuestions() {
  //   console.log("it fires");

  // }

  // checkCorrect(choice: any, answer: any): any {

  //   this.quizService.getScore(choice, answer).subscribe(response => {
  //     this.finalscore = response;
  //     //console.log(this.finalscore);

  //   });

  // }
}
