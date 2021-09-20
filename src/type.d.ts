export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
  posts: { posts: Post[]; status: string };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
