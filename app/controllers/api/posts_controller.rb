class Api::PostsController < ApplicationController
#CRUD: create, read, update, delete

before_action :require_logged_in, only: [:create, :destroy, :update]

def index
  @posts = Post.all
  render :index
end

def show
  @post = Post.find(params[:id])
  render :show
end

def create
  @post = current_user.posts.new(post_params)
  if @post.save
    render json: @post
  else
    render json: @post.errors.full_messages, status: 422
  end
end

def destroy
  @post = current_user.posts.find(params[:id])
  @post.destroy
  render json: @posts
end

def update
  @post = Post.find(params[:id])
  if @post.update(post_params)
    render json: @post
  else
    render json: @post.errors.full_messages, status: 422
  end
end

private

def post_params
  params.require(:post).permit(:title, :body)
end
end