function show_table()
{
	$.ajax({
		url:'table.php',
		data:'html',
		dataType:'text',
		success:function(show_table)
		{
			$('#table').html(show_table);
		}
	});
}

$(document).ready(function()
{
	show_table();
	$('#submit').click(function()
	{
		name=$('#inputName').val();
		desc=$('#inputDesc').val();
		link=$('#inputLink').val();
		if(name==null||name=="")
		{
			if(desc==null||desc=="")
			{
				if(link==null||link=="")
				{
					alert('Enter Information');
					return false;
				}
				else
				{
					$('#error-desc').html('Enter Description')
					return false;	
				}
			}
			else
			{
				$('#error-name').html('Enter Name')
				return false;
			}
			
		}
		else if(desc==null||desc=="")
		{
			$('#error-desc').html('Enter Description')
			return false;
		}
		else if(link==null||link=="")
		{
			$('#error-link').html('Enter Link')
			return false;
		}
		else
		{
			$.ajax({
				url:'insert.php',
				method:'post',
				data:$('form').serialize(),
				dataType:'text',
				success:function(inserted)
				{
					$('input').val('');
					show_table();
				}
			});
			return false;
		}

	});

	$('#update').click(function()
	{
		alert('h');
		return false;
	})

});	
function edit(editid)
{
	$.ajax({
		url:'edite.php',
		method:'post',
		data:{editid:editid},
		dataType:'text',
		success:function(edited)
		{
			$('#update_table').html(edited);
		}
	});
}
function deleted(deletetid)
{
	$.ajax({
		url:'delete.php',
		method:'post',
		data:{deletetid:deletetid},
		dataType:'text',
		success:function(deleted)
		{
			// alert(deleted);
			show_table();
		}
	});
}
function update_row()
{
	$.ajax({
		url:'update.php',
		method:'post',
		data:$('form').serialize(),
		dataType:'text',
		success:function(update)
		{
			show_table();
			$('input').val('');
			$('#submit').removeClass('sr-only');
			$('#update').addClass('sr-only');
		}
	});
	// return true;
}