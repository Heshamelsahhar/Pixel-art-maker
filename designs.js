


$('#Sumbutt').click(
function()
{
	var width=$('#input_width').val();
	var height=$('#input_height').val();
 
	makeGrid(width,height);
}
);


function makeGrid( w ,  h) {
    $('table').remove();
    $('<table id="pixel_canvas"> </table>').insertAfter('#canv');
	for (var i=0;i<h;i++)
	{
 		$('table').append('<tr></tr>');
	}

	$('tr').each(function()
	{
		for (var i=0;i<w;i++)
		{
 			$(this).append('<td></td>');
		}
	});
doooo();



};
function doooo(){
 var on=false,right=false,col=$('#colorPicker').val();
  $("td").contextmenu(function() {
    return false;
  });
$('td').mousedown(function(event){
     col=$('#colorPicker').val();
	on=true;
	if (event.button==2)
	{
		right=true;
        $(event.target).css('background-color','white');

	}
	else 
	{
		$(event.target).css('background-color',col);

	}
});

$('td').mousemove(function(evt){
col=$('#colorPicker').val();
     if (on==true)
     {
     	if (right==true)
     	{ 

          $(evt.target).css('background-color','white');
     	}
     	else {
     	  $(event.target).css('background-color',col);	
     	}
     }



});


$('td').mouseup(function(evet){

right=false;
on=false;



});



	
};


	