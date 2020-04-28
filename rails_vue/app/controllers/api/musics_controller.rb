class Api::MusicsController < ApplicationController
  def show
    @music = Music.find(params[:id])
    render 'show', formats:'json', handlers: 'jbuilder'
  end
end
