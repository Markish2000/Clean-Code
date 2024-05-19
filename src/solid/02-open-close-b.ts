import { HttpClient } from './02-open-close-c';

export class TodoService {
  constructor(private http: HttpClient) {}

  async getTodoItems() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const { data, status } = await this.http.get(url);

    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) {}

  async getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data, status } = await this.http.get(url);

    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}

  async getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const { data, status } = await this.http.get(url);

    return data;
  }
}
