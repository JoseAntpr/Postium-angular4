import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoryResolveService } from './../category-resolve.service';
import { NewStoryComponent } from './../new-story/new-story.component';
import { PostsResolveService } from './../posts-resolve.service';
import { PostDetailsResolveService } from './../post-details-resolve.service';
import { PostDetailsComponent } from './../post-details/post-details.component';
import { PostsByCategoryComponent } from './../posts-by-category/posts-by-category.component';
import { PostsByAuthorComponent } from './../posts-by-author/posts-by-author.component';
import { PostsViewComponent } from './../posts-view/posts-view.component';
import {UpdatePostComponent} from './../update-post/update-post.component';
import { PostsSearchComponent } from './../posts-search/posts-search.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'posts',
      component: PostsViewComponent,
      resolve: {
        posts: PostsResolveService
      }
    }, {
      path: 'posts/users/:userId',
      component: PostsByAuthorComponent,
      resolve: {
        posts: PostsResolveService
      }
    }, {
      path: 'posts/categories/:categoryId',
      component: PostsByCategoryComponent,
      resolve: {
        posts: PostsResolveService,
        category: CategoryResolveService
      }
    }, {
      path: 'new-story',
      component: NewStoryComponent
    }, {
      path: 'posts/:postId',
      component: PostDetailsComponent,
      resolve: {
        post: PostDetailsResolveService
      },
    },{
      path: 'posts/updatePost/:postId',
      component: UpdatePostComponent,
      resolve: {
        post: PostDetailsResolveService

      },
    },{
      path: 'posts/search',
      component: PostsSearchComponent

    }, {
      path: '**',
      redirectTo: '/posts'
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
