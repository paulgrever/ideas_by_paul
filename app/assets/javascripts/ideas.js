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
                                      "<a href=/ideas/"+ idea.id +"/edit class='btn btn-info spacer'>Edit Idea</a>" +
                                      "<button class='spacer delete-btn btn btn-danger' data-id=" + idea.id + ">Delete</button>" +
                                  "</div>");
      });
    }
  });


  $("#submit").on("click", function(){
    var $title = $("#idea-title").val();
    var $body = $("#idea-body").val();
    $.ajax({dataType: "json",
            url: "/ideas.json",
            method: "POST",
            data: { idea: {
              title: $title,
              body: $body }
            },
        success: function(data){
        $( "#idea-index" ).append("<div class='box'>" +
                                      "<h4>" + data.title + "</h4>" +
                                      "<h5>" + data.body + "</h5>" +
                                      "<h5>" + data.quality + "</h5>" +
                                      "<button class='spacer delete-btn btn btn-danger' data-id=" + data.id + ">Delete</button>" +
                                  "</div>" );

        $("#idea-title").val("");
        $("#idea-body").val("");
      }
    });
  });
  $("body").on("click", ".delete-btn", function(){
    var $id = $(this).data().id;
    var $box = $(this).parent();
    $.ajax({dataType: "json",
            url: "/ideas/" + $id + ".json",
            method: "DELETE",
            success: function(){
              $box.remove();
            }
    });
  });
});

