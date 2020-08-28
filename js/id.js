function show_data()
{
	$.ajax({
		url:'user-table.php',
		data:'html',
		dataType:'text',
		success:function(user_table)
		{
			$('#table_show').html(user_table);
		}
	});
	return true;
}
$(document).ready(function()
{
	/*setInterval(function(){
		show_data();
	},1000);*/
	show_data();

	
	$('#submit').click(function()
	{	
		valsite=$('#inputSite').val();
		valname=$('#inputName').val();
		valemail=$('#inputEmail').val();
		valpass=$('#inputPassword').val();
		if(valsite==null||valsite=="")
		{
			if(valname==null||valname=="")
			{
				if(valemail==null||valemail=="")
				{
					if(valpass==null||valpass=="")
					{
						$('#alert-warning').removeClass('sr-only');
						$('#alert-warning').html('Enter Information');
						return false;
					}
					else
					{
						$('#error-site').html('Enter Site');
						$('#error-name').html('Enter Name');
						$('#error-email').html('Enter Email');
						return false;
					}
				}
				else
				{
					$('#error-site').html('Enter Site');
					$('#error-name').html('Enter Name');
					return false;
				}
			}
			else
			{
				$('#error-site').html('Enter Site');
				return false;
			}
		}
		else if(valname==null||valname=="")
		{
			$('#error-name').html('Enter Name');
			return false;
		}
		else if(valemail==null||valemail=="")
		{
			$('#error-email').html('Enter Email');
			return false;
		}
		else if(valpass==null||valpass=="")
		{
			$('#error-password').html('Enter Password');
			return false;
		}
		else
		{
			$.ajax({
				url:'insert.php',
				method:'post',
				dataType:'text',
				data:$('form').serialize(),
				success:function(insert)
				{
					// alert(insert);
					// $('#error').html(insert);
					$('input').val('');
				}
			});
			show_data();
			return false;
		}
	});

	$('#search-btn').click(function ()
	{
		search=$('#inputSearch').val();
		select=$('#exampleSelect').val();
		if(search==null||search=="")
		{
			alert("Enter Search Value");
			return false;
		}
		else
		{
			$.ajax({
				url:'search.php',
				method:'post',
				data:{select:select,search:search},
				dataType:'text',
				success:function(search_result)
				{
					if(search_result<=0)
					{
						alert("Not Found");
					}
					else
					{
						$('#table_show').html(search_result);
					}
				}
			});
			return false;
		}
	});
});
function delete_row(delete_row)
{
	$.ajax({
		url:'delete.php',
		method:'post',
		data:{delete_row:delete_row},
		dataType:'text',
		success:function(deleted)
		{
			// $('#error').html(deleted);
			show_data();
		}
	});
	show_data();
	return false;
}
function edite_row(edite_id)
{
	// $('#edite_row').html('show');
	// alert(edite_id);
	$.ajax({
		url:'edite.php',
		method:'post',
		data:{edite_id:edite_id},
		dataType:'text',
		success:function(edited)
		{
			$('#edite_row').html(edited);
			// alert(edited);
			// show_data();
			
		}
	});
	return false;
}

function update_row(update)
{
	$.ajax({
		url:'update.php',
		method:'post',
		data:$('form').serialize(),
		dataType:'text',
		success:function(updated)
		{
			$('input').val('');
			setTimeout(function()
			{
				show_data();
			},1000);
		}
	});
}

