import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  questions: any;
  newUserScore: any;
  answerTally: any;
  score: number = 0;
  user: any;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  getUserQuestions() {
   console.log(this.questions);
    return this.questions;
  }

  setUserQuestions(userquestions) {
    this.questions = userquestions;
  }

  setUserScore(newscore) {
    this.newUserScore = newscore;
  }

  //setting the user
  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  getUserScore() {
    return this.newUserScore;
  }


  setScores(form, questions) {
    let answerArray = Object.values(form.value);
    
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] === questions[i].answer) {
        //console.log("Got one right!.");
        this.score++;
      }
    }
    this.http.post("/api/scores", {username: this.user, score: this.score}, { responseType: "json" }).subscribe(response => {
      this.router.navigate(["results"]);
    });
    
  }

  getScore() {
    return this.score;
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json" });
  }

  //trying to figure out how to get the username/score of the current user, so I can make that available in the service
  // getCurrentUserScore() {
  //   return this.http.get("/api/scores", {responseType: "json"});

  // }

 
}
