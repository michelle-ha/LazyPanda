class Api::SubpostsController < ApplicationController

  before_action :require_logged_in, except: [:index]

  def index
    @subposts = Subpost.all
  end

  def create
    @subpost = Subpost.new(subpost_params)
    @subpost.author_id = current_user.id
    if @subpost.save
      render :show
    else
      render json: @subpost.errors.full_messages, status: 422
    end
  end

  def destroy
    @subpost = current_user.subposts.find_by(id: params[:id])
    if @subpost && @subpost.destroy
      render :show
    else
      render json: ["Subpost cannot be deleted"], status: 422
    end
  end 

  private

  def subpost_params
    params.require(:subpost).permit(:title, :post_id, :photo)
  end
end