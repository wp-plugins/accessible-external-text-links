function externalLinkEvent(event) {
			// Opens link in a new window
			window.open(this.href);
			event.preventDefault();
		}		

		function externalLink(imgsrc,altext) {
			// scan for links in the page and put them in an array
			var pagelinks = document.getElementsByTagName("a");


			for( i = 0; i < pagelinks.length; i++) {
				linkclass = pagelinks[i].getAttribute('class');
				if(linkclass == "external") {
					//stuff to do if this is an external link
					var linktext = pagelinks[i].firstChild.nodeValue; 
					var extimg = document.createElement('img');
					extimg.setAttribute('src', imgsrc);
					extimg.setAttribute('alt', altext);
					extimg.setAttribute('title', altext);
					document.getElementsByTagName('a')[i].appendChild(extimg);
					pagelinks[i].addEventListener('click', externalLinkEvent, false);

				}
				
			}
		}
