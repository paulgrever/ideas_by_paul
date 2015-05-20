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

  it "create" do
    expect(Idea.count).to eq(1)
    post :create, format: :json, idea:{ title: "created title",
                                        body: "created body" }
    expect(response.status).to eq(201)
    expect(Idea.count).to eq(2)
    new_idea = JSON.parse(response.body, symbolize_names: true)
    expect(new_idea[:title]).to eq("created title")
  end

  it "destroys" do
    expect(Idea.count).to eq(1)
    delete :destroy, format: :json, id: @idea
    expect(Idea.count).to eq(0)
  end
end
