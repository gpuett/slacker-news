import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [PostService]
})
export class NewsComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  posts: FirebaseListObservable<any[]>;


  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
