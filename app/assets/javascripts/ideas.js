$( document ).ready(function() {
  $.ajax({
    dataType: "json",
    url: "/ideas.json",
    method: "GET",
    success: function( data ) {
      data.forEach(function(idea) {
        $( "#idea-index" ).append("<div class='box'>" +
                                      "<h4>" + idea.title + "</h4>" +
                                      "<h5>" + idea.body + "</h5>" +
                                      "<h5>" + idea.quality + "</h5>" +
                                  "</div>" );
      });
    }
  });
});

