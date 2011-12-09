(function() {
  var SkeltonjQueryPlugin;
  SkeltonjQueryPlugin = (function() {
    function SkeltonjQueryPlugin(pluginName) {
      var plugin;
      this.pluginName = pluginName;
      plugin = this;
      $.fn[this.pluginName] = function(method) {
        if (method && (plugin[method] != null)) {
          return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
          return plugin['init'].apply(this, arguments);
        } else {
          $.error("Method " + method + " does not exist on jQuery." + plugin.pluginName + "().");
          return this;
        }
      };
    }
    SkeltonjQueryPlugin.prototype.init = function(custom) {
      this.options = $.extend(true, this.options, custom);
      return this;
    };
    SkeltonjQueryPlugin.prototype.options = {};
    return SkeltonjQueryPlugin;
  })();
}).call(this);
