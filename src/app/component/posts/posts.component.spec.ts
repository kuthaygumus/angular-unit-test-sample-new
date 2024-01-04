import { Post } from 'src/app/models/post';
import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post/post.service';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

  // @Component({
  //   selector: 'app-post',
  //   template: '<div></div>',
  // })
  // class FakePostComponent {
  //   @Input() post!: Post;
  // }

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        title: 'Post 1',
        body: 'Post 1 body',
      },
      {
        id: 2,
        title: 'Post 2',
        body: 'Post 2 body',
      },
      {
        id: 3,
        title: 'Post 3',
        body: 'Post 3 body',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
        // FakePostComponent
      ],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create one post child element for each post', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const debugElements = fixture.debugElement;
    const postsElement = debugElements.queryAll(By.css('.posts'));
    expect(postsElement.length).toBe(3);
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it('should delete the selected Post from the Posts', () => {
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('should call the delete method in Post Service only once', () => {
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
