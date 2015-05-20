class IdeasController < ApplicationController
  respond_to :json, :html
  def index
    respond_with Idea.all
  end

  def edit
    @idea = Idea.find(params[:id])
  end

  def update
    @idea = Idea.find(params[:id])
    if @idea.update(idea_params)
      redirect_to ideas_path
    else
      redirect_to edit_idea_path(@idea)
    end

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
