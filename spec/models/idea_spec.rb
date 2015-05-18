require 'rails_helper'

RSpec.describe Idea, type: :model do

  it "is valid with all credentials" do
    @idea = Idea.create(title: "Title 1", body: "Body 1", quality: 0)
    expect(@idea.title).to eq("Title 1")
    expect(@idea.body).to eq("Body 1")
    expect(@idea.quality).to eq("swill")
  end

  it "set swill as a default" do
    @idea = Idea.create(title: "Title 1", body: "Body 1")
    expect(@idea.quality).to eq("swill")
  end

  it "is invalid without a title" do
    @idea = Idea.new( body: "Body 1")
    expect(@idea).to_not be_valid
  end

  it "is invalid without a body" do
    @idea = Idea.new(title: "Title 1")
    expect(@idea).to_not be_valid
  end
end
