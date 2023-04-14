import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage:string = "";
  tweetMaxLength:number = 240;
  tweetRemaining:number = this.tweetMaxLength;

  changeTweet(){
    this.tweetRemaining = 240 - this.tweetMessage.length;
  }

  sendTweet(){
    alert("Twitter criado!");
  }

}
