/**
 * Created by Dillon Kehrwald on 2/21/2016.
 */
$( "#portfolioModal1" ).on("shown", function(){
    console.log("here");
});

$('#portfolioModal1').on('shown.bs.modal', function (e) {
    console.log("here2");
});
$(window).on('shown.bs.modal', function() {
    $('#portfolioModal1').modal('show');
    console.log("here3");
});

$('#portfolioModal1').on('loaded.bs.modal', function (e) {
   console.log("here4");
});

console.log("bah");

pictures = function() {
    console.log(this);
    console.log($(this));
};