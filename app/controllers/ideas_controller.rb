class IdeasController < ApplicationController
  respond_to :json, :html
  def index
    respond_with Idea.all
  end

  def create
  end
end
