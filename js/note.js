function show_table()
{
	$.ajax({
		url:'table.php',
		data:'html',
		dataType:'text',
		success:function(show_data)
		{
			$('#show_table').html(show_data)/*.html(show_data)*/;
		}
	});
	return false;
}
$(document).ready(function()
{
	show_table();
	$('#add').click(function()
	{
		$.ajax({
			url:'insert.php',
			method:'post',
			data:$('form').serialize(),
			dataType:'text',
			success:function(inserted)
			{
				$('input').val('');
				$('textarea').val('');
				show_table();
			}
		});
		return false;	
	});
});
function deleted(deleteid)
{
	// alert(deleteid);
	$.ajax({
		url:'delete.php',
		method:'post',
		data:{deleteid:deleteid},
		dataType:'text',
		success:function(deleted)
		{
			// alert(deleted);
			show_table();
		}
	});
	return false;
}