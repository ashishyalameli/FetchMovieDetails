			var currentSearchKey = "";
			var cookieName = "recentMovies";
			
			function load(){
				document.getElementById("formdiv").style.display = "block";
				document.getElementById("con").style.display = "none";
				document.getElementById("container").style.display = "none";
				
				var recentSearchArray = getCookie();
				var recentSearchesDiv = document.getElementById("recentSearchesDiv");
				recentSearchesDiv.innerHTML = "";
				for(i = 0; i < recentSearchArray.length; i++) {
					if(typeof  recentSearchArray[i] != "undefined") {
						recentSearchesDiv.innerHTML += "<a href='javascript:movieDetails(\"" + recentSearchArray[i] + "\", \"\")'>" + recentSearchArray[i] + "</a><br />";
					}
				}
			}
			
			function movieDetails(name, date){
				document.getElementById("formdiv").style.display = "none";
				document.getElementById("con").style.display = "block";
				document.getElementById("container").style.display = "block";
				
				if(typeof name == "undefined" || name == null || name == "") {
					name = document.getElementById("mname").value;
				}
				currentSearchKey = name;
				if(typeof date == "undefined" || date == null || date == "") {
					date = document.getElementById("date").value;
				}
				document.getElementById("mname").value = "";
				document.getElementById("date").value = "";
				document.getElementById("container").innerHTML = "";
				$.getJSON("https://www.omdbapi.com/?apikey=c5ce03d5&type=movie&y=" +date+ "&s=" +name,function(json){ debugger;
					if(typeof json.Response != "undefined" && json.Response == "True") {
						pushToCookie(currentSearchKey);
						currentSearchKey = "";
					}
					
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
			
			function pushToCookie(searchKey) {
				
				var recentSearchArray = getCookie();
				
				if(searchKey != recentSearchArray[0]) {
					var i = recentSearchArray.length - 1;
					
					for(j = i; j > 0; j--) {
						if(searchKey == recentSearchArray[j]) {
							i = j;
						}
					}
					
					for(; i > 0; i--) {
						recentSearchArray[i] = recentSearchArray[i - 1];
					}
					
					recentSearchArray[0] = searchKey;
					
					document.cookie = cookieName + "=" + recentSearchArray;
				}
			}
			
			function getCookie() { debugger;
				var browserCookie = document.cookie;
				
				var recentSearchArray;
				
				if(typeof browserCookie != "undefined" && browserCookie != null && browserCookie != "") {
					var bCookieArray = browserCookie.split(";");
					
					for(i = 0; i < bCookieArray.length; i++) {
						bCookie = bCookieArray[i];
						
						if(bCookie.indexOf(cookieName) > -1) {
							recentSearchArray = bCookie.substring(cookieName.length + 1).split(",");
							break;
						}
					}
				} else {
					recentSearchArray = new Array(5);
				}
				
				return recentSearchArray;
			}
