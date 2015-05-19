require "rails_helper"

RSpec.describe IdeasController, type: :controller do
  before(:each) do
    @idea = Idea.create(title: "Title Sample", body: "Body Sample")
  end

  it "index" do
    get :index, format: :json
    expect(response.status).to eq(200)
    ideas = JSON.parse(response.body)
    idea = ideas.first
    expect(idea["title"]).to eq("Title Sample")
  end
end
