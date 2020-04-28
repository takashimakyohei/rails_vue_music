json.set! :musics do
  json.array! @musics do |music|
    json.extract! music, :id, :title
  end
end

# musics:[{"id":?,"title":"title"},{"id":?,"title":"title"}]