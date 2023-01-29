export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  createUser: User;
  deletePost: Post;
  updatePost: Post;
};

export type MutationCreatePostArgs = {
  content: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
};

export type MutationDeletePostArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePostArgs = {
  content: Scalars["String"];
  id: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  content: Scalars["String"];
  createdAt: Scalars["String"];
  id: Scalars["Int"];
  updatedAt: Scalars["String"];
  user: User;
  userId: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  allPosts: Array<Maybe<Post>>;
  postDetail: Post;
  searchPosts: Array<Maybe<Post>>;
  userPosts: Array<Maybe<Post>>;
};

export type QueryPostDetailArgs = {
  postId: Scalars["Int"];
};

export type QuerySearchPostsArgs = {
  word: Scalars["String"];
};

export type QueryUserPostsArgs = {
  userId: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  posts?: Maybe<Array<Maybe<Post>>>;
};
