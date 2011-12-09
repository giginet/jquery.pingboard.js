class SkeltonjQueryPlugin
  constructor : (@pluginName) ->
    plugin = @
    $.fn[@pluginName] = (method) ->
      if method and plugin[method]?
        return plugin[method].apply @, Array::slice.call(arguments, 1)
      else if typeof method is 'object' or not method
        return plugin['init'].apply @, arguments
      else
        $.error "Method #{method} does not exist on jQuery.#{plugin.pluginName}()."
        @
  init : (custom) ->
    @options = $.extend true, @options, custom
    @
  options : {
  }
