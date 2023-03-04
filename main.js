let name;
let poster;
let actors;
let year;
let type;
let id;
let liked;
let pattern = /\s/g;

function resetPage() {

    document.getElementById('none').innerHTML = 'Search For A Movie or TV Show';
    document.querySelector('.movies').innerHTML = '';
}

function searchResults() {
    document.querySelector('.movies').innerHTML = '';
    document.getElementById('none').innerHTML = '';
    //console.log(document.getElementById("search").value);

    wishlist = [];

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f4365ea761mshc8581f5f22386b5p11b6e3jsnd893f79bf9c2',
		    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };


    
    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' + document.getElementById("search").value, options)
        .then(response => response.json())
        .then(data => {

            const list = data.d;
            //console.log(data)
            list.map((item) => {
                
                name = item.l;
                poster = item.i.imageUrl;
                actors = item.s;
                year = item.y;
                type = item.qid;
                id = item.id;
                liked = false;

                const movie = `
                <li id="movie">
                    <div class="col-lg">
                        <div class="card h-100 d-flex align-items-stretch" style="width: 18rem; shadow p-3 mb-5 bg-body rounded">
                        <img src="${poster}" class="card-img-top" height=100%; width=200%;>
                        <div class="card-body">
                            <h4 class="card-text">${name}</h4>
                            <p class="card-text">${actors}<br>${year ? year : ""}</p>
                        </div>
                    </div><br>
                    </div>
                </li>
                `;

                
                document.querySelector('.movies').innerHTML += movie;
                //console.log(data.d.length);

            })

            var isSpace = pattern.test(document.getElementById("search").value);

            if(data.d.length > 0) {
                document.getElementById('none').innerHTML = '';
                //console.log("works");
            } else if(data.d.length <= 0) {
                document.getElementById('none').innerHTML = 'No Results Found';
                //console.log("not works");
            }


        })
        .catch(err => {
            console.log(err);

            if(err == "SyntaxError: Unexpected end of JSON input") {
                document.getElementById('none').innerHTML = 'No Results Found';
            }
            if(document.querySelector("#movie") == null) {
                document.getElementById('none').innerHTML = 'No Results Found';
                //console.log("wokings");
            }
        })
            
        
    
        //console.log(document.getElementById("search").value);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c37edaafb9mshd789725297d0b0bp1808cfjsnaa98c00d5bff',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};
