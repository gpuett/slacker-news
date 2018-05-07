import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [PostService]
})
export class SportsComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  posts: FirebaseListObservable<any[]>;


  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
