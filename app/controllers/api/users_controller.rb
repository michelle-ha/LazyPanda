class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:user][:id])

    if @user.update(user_params)
        render :show
    else
        render json: {} 
    end
end



  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :profile_pic)
  end
end
