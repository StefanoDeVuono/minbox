Minbox.Collections.Gallery = Backbone.Collection.extend({
  url: '/gallery.json',
  parse: function(response) {
    this._setCollectionAttributes(response);
    return response.gallery_items;
  },
  _setCollectionAttributes: function(response) {
    var that = this;
    _.each(response, function(val, key) {
      that[key] = val;
    });

  },
  model: Minbox.Models.GalleryItem
});
