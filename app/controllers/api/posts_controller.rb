class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
            .includes(:user, :likes, :comments, :likers)
            .with_attached_photo
    render :index
  end
  
  def show
    @post = Post.with_attached_photo
            .includes(:comments, :likes, :user, :likers).where(id: params[:id])[0]
    render :show
  end
  
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :show, status: 200
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if @post.update(post_params)
      render :show, status: 200
    else
      render json: @post.errors.full_messages, status: 422 
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:caption, :location, :photo)
  end
end