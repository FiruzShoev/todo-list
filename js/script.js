// Variable to alternate the bg colors of todos
var previousGrey = true;

// Hide and unhide the input field on clicking
$(".fa-plus").on("click", function() {
	if($(".input-wrapper").attr("class") === "input-wrapper") {
		$("input").fadeOut(500, function() {
			$(".input-wrapper").addClass("display-none");	
		});
	} else {
		$(".input-wrapper").removeClass("display-none");
		$("input").fadeIn(350);	
	}
});

// Main functionalities are added to a todo on hitting the "enter" key
$("input").keypress(function(event) {
	if(event.which === 13) {

		// Switch the boolean variable if all todos have been deleted prior to adding a new one
		// Needed to avoid two consecutive grey "lines" in the beginning
		if($(".todo-wrapper").length === 0) {
			previousGrey = true;
		}

		// Create the structure of a todo and add classes
		$(".container").append("<div></div>")
		$("div").last().addClass("todo-wrapper").append("<div></div>");
		$("div").last().addClass("todo").append("<div><i></i></div><p></p>");
		$("div").last().addClass("delete");
		$("i").last().addClass("fa fa-trash");
		if(!previousGrey) {
			$(".todo-wrapper").last().addClass("grey");
		}		
		previousGrey = !previousGrey;

		// Copy text from the input field to a todo, add crossing out functionality on clicking, clean the input field
		$("p").last().text($("input").val()).on("click", function(){
			$(this).toggleClass("done");
		});
		$("input").val("");
		
		// Add deleting functionality
		$(".delete").last().on("click", function() {
			$(this).parent().fadeOut(500, function() {
				$(this).parent().nextAll().toggleClass("grey");	
				$(this).parent().remove();
			})
		});
	}
});

	