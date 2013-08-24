Minbox.Views.Main =  Backbone.View.extend({

  tagName: 'div',
  className: 'content',

  galleryTemplate: function() {
    var template = _.template($('#template').html());
    return template(this.collection);
  },
  
  render: function(template) {
    var mainTemplate = this[template + 'Template']();
    this.$el.html(mainTemplate);
    return this;
  },

});