Minbox.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = $('body');
    this.collection = new Minbox.Collections.Gallery();
    Minbox.gals = this.collection;    
  },

  routes: {
    "": "index",

  },

  index: function(){
    var that = this;
    var mainView = new Minbox.Views.Main({
       collection: this.collection
    });
    this.collection.fetch({
      success: function(array, collection) {
        that._swapView(mainView, 'gallery');
      }
    });
  },

  _swapView: function(newView, template){
    if (this.currentView) this.currentView.remove;
    this.currentView = newView;
    
    this.$rootEl.html(this.currentView.render(template).$el);
  }

});
