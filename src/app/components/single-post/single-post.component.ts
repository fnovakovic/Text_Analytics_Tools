import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Post, Comment} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };

  comments: Comment[] = []

  commentForm: FormGroup;

  constructor(private route: ActivatedRoute, private postService: PostService, private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      name: ['', Validators.required],
      email: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
    const id: number = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.postService.findPost(id).toPromise().then(post => {
      this.post = post;
      return post;
    }).then(post => {
      this.postService.getComments(post.id).subscribe(comments => {
        this.comments = comments;
      })
    })
  }

  addComment() {
    this.postService.addComment(
      this.post.id,
      this.commentForm.get('name')?.value,
      this.commentForm.get('email')?.value,
      this.commentForm.get('body')?.value
    ).subscribe(comment => {
      this.commentForm.reset()
      this.comments.push(comment)
    })
  }
}
