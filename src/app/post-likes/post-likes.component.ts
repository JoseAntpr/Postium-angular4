import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'post-likes',
  templateUrl: './post-likes.component.html',
  styleUrls: ['./post-likes.component.css']
})
export class PostLikesComponent{

  @Input() likes: number[] = [];
  @Output() likesUpdated: EventEmitter<number[]> = new EventEmitter();
  private _sessionUser: User = User.defaultUser();

  userLikesPost(): boolean{
    return this.likes.indexOf(this._sessionUser.id) > -1;
  }

  togglePostLike(): void{
    if(this.userLikesPost()){
      this.likes = this.likes.filter((id: number) => id !== this._sessionUser.id);
    }else{
      this.likes.push(this._sessionUser.id);
    }

    this.likesUpdated.emit(this.likes);
  }


  constructor() { }

}
