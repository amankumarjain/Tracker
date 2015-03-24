autocomplete = new google.maps.places.Autocomplete(document.getElementById('pac-input'))
$(".create_form").submit(function(event) {
//event.preventDefault()
var id=document.getElementById('ident')
var url = "/api/tracker/create" // the script where you handle the form input.
var data = $(".create_form").serialize();
//alert(data)

$.ajax({
'type': 'POST',
'url': url,
'data': data,
'statusCode': {
401: function(){},
200: function(){if(arguments[0].status===1){alert('SUBMITTED SUCCESSFULLY')}}
},
/*'error': function(xhr,status,err) {
$('#incorrect').fadeIn(1000)
setTimeout(function(){$('#incorrect').fadeOut(2000)},1000)
}
*/
})
return false;
});

