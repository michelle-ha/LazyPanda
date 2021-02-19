class Api::SubpostsController < ApplicationController

    before_action :require_logged_in

    def create
      @subpost = Subpost.new(subpost_params)
      @post.author_id = current_user.id
      if @subpost.save
        render :show
      else
        render json: @subpost.errors.full_messages, status: 422
      end
    end

    def destroy
        @subpost = Subpost.find(params[:id])
        @subpost.destroy
        render json: {}
      end
  
    private
  
    def subpost_params
      params.require(:subpost).permit(:title, :post_id)
    end
  end