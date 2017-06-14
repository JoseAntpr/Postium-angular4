import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { NativeWindow } from './../window';
import { Post } from './../post';
import { PostService } from './../post.service';

@Component({
  selector: 'posts-search',
  templateUrl: './posts-search.component.html',
  styleUrls: ['./posts-search.component.css']
})
export class PostsSearchComponent implements OnInit {

  posts: Post[] = []
  query: String;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    @Inject(NativeWindow) private _window
  ) { }

  ngOnInit() {
    this._activatedRoute.queryParams
                          .switchMap((params: Params) => {
                            console.log(params)
                            this.query = params['q'];
                            return this._postService.searchPosts(params['q']);
                          })
                          .subscribe((posts: Post[])=> {
                            this.posts = posts;
                            this._window.scrollTo(0, 0);
                          });
  }

}
