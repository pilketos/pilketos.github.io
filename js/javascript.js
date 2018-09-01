$('#fullpage').fullpage();
var db = TAFFY([{nama:"M Iqbal Maulana", suara:0}, {nama:"David Augusta Chandra", suara:0}, {nama:"Jirzis Wisam Muhammad", suara:0}])
var data = [];
var i = 0;
$.each(kandidat, function(key, value){
    $('.info#kandidat'+(key+1)).children('.nama').children('.text').text(value);
    $('label#suara'+(key+1)).text(value);
});
var peserta = ['M Iqbal Maulana','David Augusta Chandra','Jirzis Wisam Muhammad'];
var suara = [0,0,0];
var suaratidaksah = 0;
function counting(){
    var jumlahsuara = suara[0] + suara[1] + suara[2];
    $("#sah").text("Suara Sah : " + jumlahsuara);
    $.each(suara, function(key,value){
        var persentase = ((value/jumlahsuara)*100).toFixed(2);
        if (jumlahsuara==0){
            persentase = 0;
        }
        $('.bar#kandidat'+(key+1)).children(".uncolor").width(((100 - persentase)+"%"));
        $('.bar#kandidat'+(key+1)).children(".info").text(value + " (" + persentase+"%)");
    });
}
$(".add").click(function(){
    var index = $(this).attr("index");
    index = Number(index);
    suara[(index-1)] = suara[(index-1)] + 1;
    db({nama:peserta[(index-1)]}).update({suara:suara[(index-1)]})
    counting();
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/click.mp3');
    audioElement.play();
    alert('Terima Kasih Sudah Memilih!');
});

$(".infopanel").css("padding-top",( $(".foto").height() - 100 ));
$(".subname").html(judul);
$(window).resize(function(){
  $(".infopanel").css("padding-top",( $(".foto").height() - 100 ));
});
