class Api::PostsController < ApplicationController
  #CRUD: create, read, update, delete
  
  before_action :require_logged_in, only: [:create, :destroy, :update]
  # after_commit :add_default_cover, on: [:create, :update]

  
  def index
    @posts = Post.all
    render :index
  end
  
  def show
    @post = Post.find(params[:id])
    render :show
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
  
  def update
    @post = Post.find(params[:post][:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {}
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :body, :photo) 
  end

  # def add_default_cover
  #   unless cover.attached?
  #     self.cover.attach(io: File.open(Rails.root.join("app", "assets", "images", "default.jpeg")), filename: 'default.jpg' , content_type: "image/jpg")
  #   end
  # end
  
  end