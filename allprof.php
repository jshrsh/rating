<!--  -->
	<div id="all_prof_container">
		<form action="<?= $_SERVER['REQUEST_URI'] ?>" method="post">
		<span class="sl">Select a professor: </span>
		<span class="sl">
		<select name="professor">
			<?php 
				foreach($container_name as $v)
				{
					print "<option>" . $v . "</option>";
				}
			?>
		</select>
		</span>
		<span class="sl">
			<input type="submit" name="go" value="Submit"/>
		</span>
		</form>
	</div>
	<div id="main_content">
		<?php 
			if(count($errors) != 0)
			{
				foreach($errors as $v)
				{
					print $v;
				}
			}
			else
			{
				if(count($ac) != 0)
				{
					
				?>
						
					<div id="left_content">
						<img src="" width="150" height="120" />
					</div>
					<div id="right_content">
						<?php 
						
							foreach($ac as $k=>$v)
							{
								if($k == "id" or $k == "comment")
								continue;
								else
								{
									print "
										<span class='cover'>$k: $v</span>
									";
								}
							}
						?>
						<span class="cover" id="ccover">
							<span id="rt_txt">
								Ratings Available:
							</span><br/>
							<span class="rt">1</span>
							<span class="rt">2</span>
							<span class="rt">3</span>
							<span class="rt">4</span>
							<span class="rt">5</span>
						</span>
					</div>
					
				<?php
					
				}
			}
		?>
	</div>
	
	<?php 
		#making sure if professor has not been selected then we do not show his info
		if(count($ac) != 0)
		{
	?>
	<hr/>
	<div id="bottom_content">
	<form action="topost.php" method="post">
		<span id="com">Leave Comment For: <?= $ac["Full name"]?></span>
		<div id="com_container">
			<textarea id="comment" placeholder="Write your comment!" name="comment"></textarea>
		</div>
		<div id="rate">
			<span id="rttxt">
				Rate <?= $ac["Full name"] ?>: 
			</span>
			<select name="rate">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
		</div>
		<input type="hidden" name="uid" value=<?= $ac["id"] ?> />
		<input type="submit" value="Submit your response" name="rating" />
	</form>
	</div>
	<div id="comment_cont">
		<?php 
			$get = "
				SELECT comment.p_id,general.p_id,comment.comment as comment from comment,general WHERE comment.p_id = general.p_id AND general.p_id = '".$ac["id"]."' ORDER BY comment.p_id DESC
			";#getting comments
			$get = mysql_query($get);
			$r = mysql_num_rows($get);
			
			#check if any comment has been found
			if($r != 0)
			{
				while($t = mysql_fetch_assoc($get))
				{
					print "
						<p id='commenttxt'>$t[comment]</p>
					";
				}
			}
			
		?>
	</div>
<?php
	}
	else
	{
		#if professor has not been selected the current message will be shown
		print "<h4 style='text-align:center;'>Please select a professor!</h4>";
	}
?>
