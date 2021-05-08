class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])
    rander json:{ post: post }
  end
end
