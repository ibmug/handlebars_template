//This guy will have the routes for burguers...
//Make sure we wait to attach our handlers until the DOM is fullly loaded
//This is why $(function(){}); exists...
//update
//create
//remove
$(function(){

    $(".change-status").on("click", function(event){
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");
        var newStatusState = {
            uStatus: newStatus
        };

        //Lets send the request:
        $.ajax("/api/burguers/" + id, {
            type:"PUT",
            data:newStatusState,
        }).then(
            function(){
                console.log("Changed status to: ", newStatus);
                //5Reload the page
                location.reload();
            }
        );
    });

    //Create Function
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newUser = {
            name= $("uname").val().trim(),
            uactive = $("[name=status]:checked").val().trim()
        };

        $.ajax("/api/burguers",{
            type: "POST",
            data: newUser
        }).then(
            function(){
                console.log("created new user");
                location.reload();
            }
        );

    });

    //Delete function
    $(".remove-burguer").on("click", function(event){
        var id = $(this).data("id");

        //Send the delete request
        $.ajax("/api/burguers/" + id,{
            type:"DELETE",
        }).then(
            function(){
                console.log("Removed burger: ", id);
                //Reload
                location.reload();
            }
        );
    });


});
