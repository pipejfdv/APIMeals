const recetaApi = function(){
    const link = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    console.log(link);
}
recetaApi();



$(document).ready(function(){

    $("#buscar").click(function(){
        return getReceta();
    });
});
function getReceta(){
    var inputIngrediente = $("#inputIngrediente").val();
    console.log(inputIngrediente);
    $.ajax({
        url:'https://themealdb.com/api/json/v1/1/filter.php?i=' + inputIngrediente,
        type:"get",
        dataType:"json",
    
        success: function(data){
            console.log(data);
            // var recetas = mostrarResultados(data);
            // $("#resultado").html(recetas);
            if(data.meals.length > 0){
                $("#resultado").html("");
                let recetas = data.meals;
                $.each(recetas, function(i, a){
                    $("#resultado").append(
                        `<div class="col d-flex justify-content-start">
                        <div class="card" style="width: 18rem;">
                                <img src="${a.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h4 class="card-text">${a.strMeal}</h4>
                            </div>
                        </div>
                        </div>`
                    )
                })
                $("#inputIngrediente").val('');
            }
            else{
                $("#resultado").html(
                    '<h1>'+data.Error+'</h1>'
                )
            }
            // $("#inputIngrediente").val('');
        }
    });

}

function mostrarResultados(data){
    

    // return '<div class="card" style="width: 18rem;"> <img src="'+data.strMealThumb+'" class="card-img-top" alt="imagen de receta"> <div class="card-body">  <h5 class="card-title">Receta '+data.strMeal+'</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div>'

}