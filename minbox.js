window.Minbox = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    Minbox.router = new Minbox.Router();
    Backbone.history.start();
  }
};