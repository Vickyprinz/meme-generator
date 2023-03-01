class UsersController < ApplicationController
  
    def signin
      # find user then authenticate
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        render json: {token: issue_token(id: user.id)}
      else
        render json: {error: 'User/password combo not found'}, status: 400
      end
    end
  
    def signup
      # find user then authenticate
      user = User.create(username: params[:username], password: params[:password])
      # puts user
      # byebug
      if user 
        render json: user
      else
        render json: {error: 'User/password combo not found'}, status: 400
      end
    end
  
  
    def validate 
      user = get_current_user
      if user
        render json: {username: user.username}
      else
        render json: {error: 'invalid user'}, status: 404
      end
    end
  
    def dashboard
      user = get_current_user
      if user
        render json: user.customised_memes
      else
        render json: {error: 'invalid user'}, status: 404
      end
    end 
  
    def index
      users = User.all
      render json: users
    end
  
    def new
      user = User.new
    end
  
    def show
      user = User.find_by(id: params[:id])
      if user
        render json: user
      else
        render json: {error: "This user does not exist?"}, status: 404
      end
    end
  
    def create
      username = params[:username]
      password = params[:password_digest]
  
      user = User.find_or_create_by(username)
  
      if user
        render json: user
      else
        render json: {error: "Erorr creating user"}, status: 400
      end
    end
  
    private
  
    def user_params
        params.require(:user).permit(:id, :username, :password)
    end
  end