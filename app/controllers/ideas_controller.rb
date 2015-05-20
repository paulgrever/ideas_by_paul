class IdeasController < ApplicationController
  respond_to :json, :html
  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title,
                                 :body,
                                 :quality)
  end
end
