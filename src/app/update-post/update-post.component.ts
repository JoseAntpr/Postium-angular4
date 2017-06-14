import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router'

import { Post } from './../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  private _post: Post;
  private _editionPost: Boolean = true;
  private _postSubscription: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _router: Router
  ) { }

  private _unsubscribePostUpdate():void{
    if(this._postSubscription){
      this._postSubscription.unsubscribe;
    }
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { post: Post }) => {  
      this._post = data.post
    });
  }

  updatePost(post: Post): void{
    this._unsubscribePostUpdate();
    this._postSubscription = this._postService
      .updatePost(post)
      .subscribe((updatedPost: Post) => {
        this._post = updatedPost;
        this._router.navigate(['posts/', post.id])
      })
    
  }

}
