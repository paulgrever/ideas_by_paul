class Idea < ActiveRecord::Base

  enum quality: %w(swill quality other)
end
