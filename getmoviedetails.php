<html>
	<head>
		<title>Get Movie Details</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
			html{
				background: #696969;
			}
			body{
				color: #FFFFFF;
				font-size: 25px;
				font-family: "Comic Sans MS", cursive, sans-serif;
				background-opacity: 0.5;
			}
			.input-field label {
				color: #6cacc7;
				display: block;
				font-size: 34px;
				margin-top: 5px;
			}
			.input-field input[type="text"] {
				border: 1px solid #dfdfdf;
				border-radius: 4px;
				box-shadow: 0 0 4px rgba(223, 223, 223, 0.2);
				margin: 6px 0;
				padding: 9px;
				transition: all 0.15s ease-in-out 0s;
				width: 30%;
			} 
			.input-field input[type="submit"] {
				background: #f85f64;
				border: medium none;
				border-radius: 4px;
				color: #fff;
				cursor: pointer;
				font-weight: bold;
				letter-spacing: 1px;
				margin: 5px 0;
				outline: medium none;
				overflow: hidden;
				padding: 7px;
				text-transform: uppercase;
				transition: all 0.15s ease-in-out 0s;
				width: 9%;
			} 
		</style>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="script.js"></script>
	</head>
	<body onload="load()" align="center">
		<h4>Search for movie details</h4>
		<div id="formdiv">
			<form action="JavaScript:movieDetails()" id="mdetails" name="mdetails">
				<div class="input-field">
					<label>Movie name: </label>
					<input type="text" placeholder="Enter movie name" id="mname" name="mname" value="" required />
					<br />
					<input type="submit" value="Get Details" />
				</div>
			</form>
		</div>
		<div id="con" name="con">
			<div align="left" id="container">
			</div>
			<input type="button" value="Back" onclick="reload()" />
		</div>
	</body>
</html>
