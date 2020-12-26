"use strict";
var app = angular.module("scriptSong", ['ngSanitize']);

app.controller("FirstController", function ($scope, $http, $filter) {
	
	var songReal;
	var cifrado = getParameterByName("cifrado");
    if (cifrado == 'normal')
	{
		songReal = SetToneV2(song);
		$scope.searchClients = songReal;
	}
    else
	{
		songReal = SetTone(song);
		$scope.searchClients = songReal;
	}

});



function start_scroll_down() {
    var y=0;
    scroll = setInterval(function () {

        
        if (y < 100) {
            window.scrollBy(0, 5);
            y++;
        }
        if (y >= 100 && y <= 200) {
            window.scrollBy(0, -5);
            y++;
        }
        if (y >= 200 && y <= 300)
        {
            y = 0;
        }       
    }, 1500);
}


function SetTone(song) {
    var tone = getParameterByName("tone");
    if (tone == '')
        tone = 0;
    else
        tone = parseInt(tone);
    var res;
    var allTones = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];


    res = song.replace(/-1-/g, allTones[0 + tone]);
    res = res.replace(/-2-/g, allTones[(1 + tone)]);
    res = res.replace(/-3-/g, allTones[2 + tone]);
    res = res.replace(/-4-/g, allTones[3 + tone]);
    res = res.replace(/-5-/g, allTones[(4 + tone)]);
    res = res.replace(/-6-/g, allTones[5 + tone]);
    res = res.replace(/-7-/g, allTones[6 + tone]);
    res = res.replace(/-8-/g, allTones[7 + tone]);
    res = res.replace(/-9-/g, allTones[8 + tone]);
    res = res.replace(/-10-/g, allTones[9 + tone]);
    res = res.replace(/-11-/g, allTones[10 + tone]);
    res = res.replace(/-12-/g, allTones[11 + tone]);

    return res;
}

function SetToneV2(song) {
    var tone = getParameterByName("tone");
    if (tone == '')
        tone = 0;
    else
        tone = parseInt(tone);
    var res;
    var allTones = ["La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#","La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#","La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#"];


    res = song.replace(/-1-/g, allTones[0 + tone]);
    res = res.replace(/-2-/g, allTones[(1 + tone)]);
    res = res.replace(/-3-/g, allTones[2 + tone]);
    res = res.replace(/-4-/g, allTones[3 + tone]);
    res = res.replace(/-5-/g, allTones[(4 + tone)]);
    res = res.replace(/-6-/g, allTones[5 + tone]);
    res = res.replace(/-7-/g, allTones[6 + tone]);
    res = res.replace(/-8-/g, allTones[7 + tone]);
    res = res.replace(/-9-/g, allTones[8 + tone]);
    res = res.replace(/-10-/g, allTones[9 + tone]);
    res = res.replace(/-11-/g, allTones[10 + tone]);
    res = res.replace(/-12-/g, allTones[11 + tone]);

    return res;
}

function stop_scroll_down() {
    clearInterval(scroll);
    console.log('stop');
}

function cambioTono(cant) {
	var tone=parseInt(getParameterByName("tone"),10);
	if(tone=='' || isNaN( tone ))
		tone=0;
	tone=tone+cant;
	window.location.href = window.location.href.split("?")[0]+"?tone="+tone;
}

function cambiarCifrado() {
	
	var tone=parseInt(getParameterByName("tone"),10);
	if(isNaN( tone ))
		tone=0;
	
	var cifrado = getParameterByName("cifrado");	
    if (cifrado == 'normal')
	{
		window.location.href = window.location.href.split("?")[0]+"?tone="+tone;
	}
	else
	{
		window.location.href = window.location.href.split("?")[0]+"?tone="+tone+"&cifrado=normal";
	}
}


function getParameterByName(Name) {
    Name = Name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + Name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key == 8) || (key == 46))
}
