$(document).ready(function()
{
	$('#error-box button').click(function()
	{
		$('#error-box button').addClass('sr-only');
	});
	$('#submit').click(function()
	{
		email=$('#exampleInputEmail1').val();
		pass=$('#exampleInputPassword1').val();
		if(email==null||email=="")
		{
			if(pass==null||pass=="")
			{
				$('#alert-box').removeClass('sr-only');
				// $('#alert-box').show();
				$('#error').html("Enter Email & Password"); 
			}
			else
			{
				$('#alert-box').removeClass('sr-only');
				$('#error').html('Enter Username');
			}
		}
		else if(pass==null||pass=="")
		{
			$('#alert-box').removeClass('sr-only');
				$('#error').html('Enter Password');
		}
		else
		{
			$.ajax({
				url:'login.php',
				method:'post',
				data:$('form').serialize(),
				dataType:'text',
				success:function(login)
				{
					if(login==1)
					{
						open('main.php','_parent');
					}
					else
					{
						$('#alert-box').removeClass('sr-only');
						$('#error').html(login);
					}
				}
			});
		}
		return false;
	});
	$('#exampleInputPassword1').keyup(function()
	{
		pass_val=$('#exampleInputPassword1').val();
		if(pass_val.length>0)
		{
			$('#eyes-o').removeClass('sr-only');
		}
		/*if($('#exampleInputPassword1').val().length()>0)
		{
		}*/
	});
});

function pass_show()
{
	$('#eyes-o').addClass('sr-only');
	$('#eyes-c').removeClass('sr-only');
	$('#exampleInputPassword1').attr('type','text');
}
function pass_hide()
{
	$('#eyes-c').addClass('sr-only');
	$('#eyes-o').removeClass('sr-only');
	$('#exampleInputPassword1').attr('type','password');
}

function pass_toggle()
{
	pass_type=$('#exampleInputPassword1').attr('type');
	if(pass_type=='password')
	{
		pass_show();
		setTimeout(function(){
			pass_hide();
		},800);
	}
	else
	{
		pass_hide();
		setTimeout(function(){
			pass_show();
		},800);
	}
}
