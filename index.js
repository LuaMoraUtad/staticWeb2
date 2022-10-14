var participants = [];

const showParticipants = (data) => {
    let arrayAuxiliar = [];

    data.forEach(element => {
        arrayAuxiliar.push(element);
    });

    //$("#users").text("Participants: " + arrayAuxiliar);
    $("#users").html("<strong>Participants: </strong></br>");
    arrayAuxiliar.forEach(element => {
        $("#users").append("<div class='persona' >" +
                            "<label class='dato'> Nombre:" + element.name + "</label></br>" +
                            "<label class='subdato'> Correo: " + element.email + "</label></br>" +
                            "<label class='subdato'> Ciudad: " + element.address.street + "</label></br>" +
                            "<label class='subdato'> Telefono: " + element.phone + "</label></br>" +
                            "<label class='subdato'> Website: " + element.website + "</label></br>" +
                            "</div></br>");
    });
    
}

const getWinner = (data) => {
    const aleat = Math.floor(Math.random() * data.length);

    $("#selected").html("<strong>Seleccionado: " + 
    
                    "<label class='ganador'>" + data[aleat].name + "</label></strong>");
}

$(document).ready(function(){
    //jsonplaceholder.typicode.com/users

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/jason",
        success: function(response){            
            participants = response;
            showParticipants(participants);
        },

        error: function(error){
            console.log(error);
            alert(error);
        }
    });

    $(".btn").click(function(){
        getWinner(participants);
    });
});