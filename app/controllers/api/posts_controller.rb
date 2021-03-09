class Api::PostsController < ApplicationController
#CRUD: create, read, update, delete

# before_action :require_logged_in, only: [:create, :destroy, :update]
before_action :require_logged_in, only: [:create, :destroy]


def index
  @posts = Post.all
  render :index
end

def show
  @post = Post.find_by(id: params[:id])
  if @post
    render :show
  else
      render json: ['Post does not exist']
  end
end

def create
  @post = Post.new(post_params)
  @post.author_id = current_user.id
  if @post.save
    render :show
  else
    render json: @post.errors.full_messages, status: 422
  end
end

# def update
#   @post = Post.find_by(id: params[:id])
#   if  @post.author_id == current_user.id && @post.update(post_params)
#     render :show
#   else
#     render json: @post.errors.full_messages, status: 422
#   end
# end

def destroy
  @post = current_user.posts.find_by(id: params[:id])
  if @post && @post.destroy
      render :show
  else
      render json: ["Post cannot be deleted"], status: 422
  end
end

private

def post_params
  params.require(:post).permit(:title, :body, :photo) 
end

end