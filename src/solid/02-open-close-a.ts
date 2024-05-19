import { HttpClient } from './02-open-close-c';
import { PhotosService, PostService, TodoService } from './02-open-close-b';

(async () => {
  const httpClient = new HttpClient();

  const photosService = new PhotosService(httpClient);
  const postService = new PostService(httpClient);
  const todoService = new TodoService(httpClient);

  const photos = await photosService.getPhotos();
  const posts = await postService.getPosts();
  const todos = await todoService.getTodoItems();

  console.log({ todos, posts, photos });
})();
