$( document ).ready(function() {
  $.ajax({
    dataType: "json",
    url: "/ideas.json",
    method: "GET",
    success: function( data ) {
      data.forEach(function(idea) {
        $( "#idea-index" ).append("<div class='box'>" +
                                      "<h2>" + idea.title + "</h2>" +
                                      "<h5>" + idea.body + "</h5>" +
                                      "<h2 class='idea-quality'>"+
                                        "<a href=#/ class='btn btn-sm minus btn-danger' data-minus="+ idea.id + " data-quality="+ idea.quality + "><i class='fa  fa-bomb'></i></a> " +
                                        "<span class=txt>" + idea.quality + " </span>" +
                                        " <a href=#/ class='btn btn-sm  btn-warning plus' data-plus="+ idea.id + " data-quality="+ idea.quality + "><i class='fa fa-rocket'></i></a>" +
                                      "</h2>" +
                                      "<a href=/ideas/"+ idea.id +"/edit class='btn btn-info spacer'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span> Edit Idea</a>" +
                                      "<button class='spacer delete-btn btn btn-danger' data-id=" + idea.id + "><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Delete</button>" +
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
                                      "<h2>" + data.title + "</h2>" +
                                      "<h5>" + data.body + "</h5>" +
                                      "<h2 class='idea-quality'>"+
                                        "<a href=#/ class='btn btn-sm btn-danger minus' data-minus="+ data.id + " data-quality="+ data.quality +"><i class='fa fa-bomb'></i></a>" +
                                        "<span class=txt>" + data.quality + " </span>" +
                                        "<ahref=#/ class='btn btn-sm btn-warning plus' data-plus="+ data.id + " data-quality="+ data.quality + "><i class='fa fa-rocket'></i></a>" +
                                      "</h2>" +
                                      "<a href=/ideas/"+ data.id +"/edit class='btn btn-info spacer'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span> Edit Idea</a>" +
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

  $("body").on("click", ".plus", function(){
    var $id = $(this).data().plus;
    var $quality = $(this).data().quality;
    var $qualityText = $(this).siblings('.txt');
    var $new_value = "";
    switch($quality){
      case "swill":
        $new_value = "plausible";
        break;
      case "plausible":
         $new_value = "genius";
        break;
      case "genius":
         $new_value = "genius";
        break;
      default:
        $new_value = "swill";
        break;
    }
    $.ajax({dataType: "json",
            url: "/ideas/" + $id + "/quality.json",
            method: "PATCH",
            data: {idea:{
                          quality: $new_value
                        }
                  },
            success: function(data){

              $qualityText.text($new_value);
            }
          });

  });
  $("body").on("click", ".minus", function(){
    var $id = $(this).data().minus;
    var $quality = $(this).data().quality;
    var $qualityText = $(this).siblings('.txt');
    var $new_value = "";
    switch($quality){
      case "swill":
        $new_value = "swill";
        break;
      case "plausible":
         $new_value = "swill";
        break;
      case "genius":
         $new_value = "plausible";
        break;
      default:
        $new_value = "swill";
        break;
    }
    $.ajax({dataType: "json",
            url: "/ideas/" + $id + "/quality.json",
            method: "PATCH",
            data: {idea:{
                          quality: $new_value
                        }
                  },
            success: function(data){

              $qualityText.text($new_value);
            }
          });

  });
});

