import { Post } from 'src/app/models/post';
import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post/post.service';

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;

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
      providers: [
        PostsComponent,
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });

    component = TestBed.inject(PostsComponent);
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it('should delete the selected Post from the Posts', () => {
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    })

    it('should call the delete method in Post Service only once', () => {
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

  })
});
