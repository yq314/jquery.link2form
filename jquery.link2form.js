(function($){
        $.fn.link2form = function() {
                this.filter('a').each(function() {
                        var request = $(this).attr('href').split('?');
                        var action = request[0], params = request[1].split('&');
                        var form = $('<form/>', {action: action, method: 'post'}).appendTo('body');
                        for (var i in params) {
                                var p = params[i].split('=');
                                var key = p[0], value = p[1];
                                $('<input/>', {type: 'hidden', name: key, value: value}).appendTo(form)
                        }
                        form.submit();
                        return false;
                });

                return this;
        };
}(jQuery));
