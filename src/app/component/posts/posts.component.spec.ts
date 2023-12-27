import { Post } from 'src/app/models/post';
import { PostsComponent } from './posts.component';

xdescribe('Posts Component', () => {
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
    component = new PostsComponent(mockPostService);
  });

  describe('delete', () => {
    it('should delete the selected Post from the Posts', () => {
      component.posts = POSTS;
      component.delete(POSTS[1]);

      expect(component.posts.length).toBe(2);
    })
  })
});
