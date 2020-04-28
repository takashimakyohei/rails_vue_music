class Api::MusicsController < ApplicationController
  def index
    @musics = Music.all
    render 'index',formats:'json',handlers:'jbuilder'
  end

  def show
    @music = Music.find(params[:id])
    render 'show', formats:'json', handlers: 'jbuilder'
  end
end
