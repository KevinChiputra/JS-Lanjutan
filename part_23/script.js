$('.search-button').on('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=b3ccd5f9&s=' + $('.input-keyword').val(),
        success: results =>{
            const movies = results.Search
            let cards = ''
            movies.forEach(m => {
                cards += showCards(m)
            })
            $('.movie-container').html(cards)
    
    
            // ketika tombol diclick
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=b3ccd5f9&i=' + $(this).data('imdbid'),
                    success: m =>{
                        const movieDetail = showMovieDetail(m)
    
                                                $('.modal-body').html(movieDetail)
                                            },
                    error: (e) =>{
                        console.log(e.responseText)
                    }
    
                })
            })
    
        },
        error: (e) =>{
            console.log(e.responseText)
        }
    })
    
})





function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}



function showMovieDetail(m){
   return  `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                            <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>Writer : ${m.Writer}</strong></li>
                            <li class="list-group-item"><strong>Plot : ${m.Plot}<br>test</strong></li>
                        </ul>
                    </div>
                </div>
            </div>`
    }