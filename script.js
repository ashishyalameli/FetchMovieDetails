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
				document.getElementById("mname").value = "";
				document.getElementById("container").innerHTML = "";
				$.getJSON("https://www.omdbapi.com/?apikey=3f659320&t=" +name,function(json){
					console.log(Object.keys(json));
					var j=0,k=0,count=0;
					var ind = new Array();
					Object.keys(json).forEach(function(key){
						ind[j] = key;
						j += 1;
					});
					console.log(ind);
					document.getElementById("container").innerHTML += "Poster: " + "<div><img src='" + json.Poster + "' alt='Not available!'></div><br />";
					for(i in json){
						count += 1;
						for(;k<ind.length;){
							if(ind[k] == "Poster"){
								document.getElementById("container").innerHTML += "";
							} else if(ind[k] == "Ratings"){
								document.getElementById("container").innerHTML += ind[k] + ": N/A<br />";
							} else{
								document.getElementById("container").innerHTML += ind[k] + ": " + json[i] + "<br />";
							}
							k += 1;
							if(count == k){
								break;
							}
						}
					}
				});
			}
