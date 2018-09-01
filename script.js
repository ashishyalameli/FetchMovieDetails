function load(){
				document.getElementById("formdiv").style.display = "block";
				document.getElementById("con").style.display = "none";
				document.getElementById("container").style.display = "none";
			}
			
			function movieDetails(){
				document.getElementById("formdiv").style.display = "none";
				document.getElementById("con").style.display = "block";
				document.getElementById("container").style.display = "block";
				
				var name = document.getElementById("mname").value;
				var date = document.getElementById("date").value;
				document.getElementById("mname").value = "";
				document.getElementById("container").innerHTML = "";
				$.getJSON("https://www.omdbapi.com/?apikey=3f659320&y=" +date+ "&s=" +name,function(json){
					console.log(Object.keys(json));
					document.getElementById("container").innerHTML += "Number of results: " + json.totalResults + "<br />";
					var j=0,k=0;
					var ind = new Array();
					for(i in json.Search){
						Object.keys(json.Search[i]).forEach(function(key){
							ind[j] = key;
							j += 1;
						});
					}
					console.log(ind);
					json.Search.forEach(function(movie){
						document.getElementById("container").innerHTML += "Poster: <div><img src='" + movie.Poster + "' alt='Not available!'></div><br />";
						for(i in movie){
							if(ind[k] == "Poster"){
								document.getElementById("container").innerHTML += "";
							} else{
								document.getElementById("container").innerHTML += ind[k] +": "+ movie[i] + "<br />";
							}
							k += 1;
						}
						document.getElementById("container").innerHTML += "<br /><hr><br />";
					});
				});
			}
