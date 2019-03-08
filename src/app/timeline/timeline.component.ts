import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { User } from '../user';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})

export class TimelineComponent implements OnInit {
  user = 'Bob Kelso';
  tweets: Tweet[] = [
    {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock',
      favoriteCount: 3
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso',
      favoriteCount: 5
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  onTweet(userInput) {
    this.tweets.push({ created_at: new Date(), id: this.tweets.length + 1, text: userInput.value, user: this.user });
    console.log(this.user);

  }

  onHeart(heart, tweet) {
    tweet.favoriteCount++;
    heart.className = "fas fa-heart";
  }

}
