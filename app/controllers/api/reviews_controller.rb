class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
      @review = Review.find(params[:id])
      @review.destroy
      render json: {}
    end

  private

  def review_params
    params.require(:review).permit(:content, :post_id)
  end
end
