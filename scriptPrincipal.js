"use strict";
var app = angular.module("scriptPrincipal", ['ngSanitize']);

app.controller("FirstController", function ($scope, $http, $filter) {

  $scope.selectedSongs = [];

	
    $scope.canciones = [
    {
		id:'1',
        nombre: 'La unica razon',
        autor: 'Danilo Montero',
        categoria: 'Alabanza, Poderoso, tu eres todo poderoso',
        url: 'laUnicaRazon',
        tone:'22',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=PqvFBBwkx34',
		ensayo:'',
    },
    {
		id:'2',
        nombre: 'Poderoso',
        autor: 'Danilo Montero',
        categoria: 'Adoracion, Poderoso, sentado en su trono rodeado de luz',
        url: 'Poderoso',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=QJkLRFBqX3s',
		ensayo:'',
    },
    {
		id:'3',
        nombre: 'Aunque un ejercito',
        autor: 'Marcos Witt',
        categoria: 'Alabanza, Victoria,aunque un ejercito, Refugio, porque tu eres mi escudo',
        url: 'AunqueUnEjercito',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=JeANP36I4ZQ',
		ensayo:'',
    },
	{
		id:'4',
        nombre: 'tu eres digno de gloria',
        autor: 'Gary Marquez',
        categoria: 'Alabanza, Gloria, Digno, tu eres digno de gloria, hoy te alabamos señor',
        url: 'HoyTeAlabamosSenor',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=51uk2mx-8RY',
		ensayo:'',
    },
	{
		id:'5',
        nombre: 'Venga tu Reino',
        autor: 'Hillsong',
        categoria: 'Alabanza, Reino, Gracia, Que tu reino Dios venga con poder, tu amor me alcanzo señor',
        url: 'vengaTuReino',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=2upmIYqr268',
		ensayo:'tuAmorMeAlcanzo.mp4',
    },
	{
		id:'6',
        nombre: 'Eres Rey de los Cielos',
        autor: 'Marco Barrientos',
        categoria: 'Adoracion, Glorioso Salvador, Rey',
        url: 'reyDeLosCielos',
        tone:'12',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=E-W39HA2jS4',
		ensayo:'',
    },
		{
		id:'7',
        nombre: 'Tu Mirada',
        autor: 'Marcos Witt',
        categoria: 'adoracion, tus ojos revelan que yo, se que es tu fidelidad, fidelidad',
        url: 'TuMirada',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=_RYuJjX4rSM',
		ensayo:'',
    },
	{
		id:'8',
        nombre: 'Hay Libertad',
        autor: 'Art Aguilera',
        categoria: 'Alabanza, Hoy puedo danzar con libertad, hay libertad en la cassa de dios, libertad',
        url: 'HayLibertadEnLaCasa',
        tone:'19',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=NrBQK-AjBq8',
		ensayo:'',
    },
	{
		id:'9',
        nombre: 'Hermoso eres',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, En mi corazon hay una cancion, hermoso eres mi señor, hermoso',
        url: 'HermosoEres',
        tone:'22',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=v_WE0EDtinU',
		ensayo:'',
    },
	{
		id:'10',
        nombre: 'Yo quiero mas de ti',
        autor: 'Jaime Murrel',
        categoria: 'Adoracion, yo quiero mas de ti, quebranta mi corazon, entrega, necesidad, entrega',
        url: 'YoQuieroMasDeTi',
        tone:'22',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=trndJlLjXPM',
		ensayo:'',
    },
	{		
		id:'11',
        nombre: 'Como el ciervo busca por las aguas',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, como el ciervo, llename señor, necesidad, busqueda, sed',
        url: 'LlenameSenor',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=i-imaaYDTaE',
		ensayo:'',
    },
	{
		id:'12',
        nombre: 'Tengo Hambre de ti',
        autor: 'Jesus Adrian Romero',
        categoria: 'Adoracion, Por un momento en tu presencia, tengo hambre de ti, necesidad, busqueda, hambre, ',
        url: 'TengoHambreDeTi',
        tone:'22',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=K-tA14s1HAA',
		ensayo:'',
    },
	{
		id:'13',
        nombre: 'Cuan grande es Dios',
        autor: 'En espiritu y en verdad',
        categoria: 'Adoracion, el esplendor de un rey, cuan grande es Dios, Grande, exaltacion,  ',
        url: 'CuanGrandeEsDios',
        tone:'19',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=yhSQZHZZy08',
		ensayo:'',
    },
	{
		id:'14',
        nombre: 'Abre mis ojos oh cristo',
        autor: 'Danilo Montero',
        categoria: 'alabanza, Abre mis ojos oh cristo, contemplar tu majestad, ojos, quiero verte, santo ',
        url: 'AbreMisOjosOhCristo',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=v93urzRrILc',
		ensayo:'',
    },
	{
		id:'15',
        nombre: 'Exaltate',
        autor: 'Marcos Witt',
        categoria: 'adoracion, al borde de tu gran trono, exaltate,  ',
        url: 'AlBorde',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=1FzIWbbNJvE',
		ensayo:'',
    },
	{
		id:'16',
        nombre: 'Quiero levantar mis manos',
        autor: 'Marcos Witt',
        categoria: 'adoracion, quiero levantar mis manos, hijo de dios recibe hoy, gloria, honra, honor,   ',
        url: 'QuieroLevantarMisManos',
        tone:'12',
		tempo:'',
		tonalidad:'?',
		youtube:'https://www.youtube.com/watch?v=QXLtUY7xAoE',
		ensayo:'',
    },
	{
		id:'17',
        nombre: 'A quien ire',
        autor: 'Danilo Montero',
        categoria: 'adoracion, A quien ire, cristo a donde mas podria ir ',
        url: 'AQuienIre',
        tone:'22',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=fk0bVEiZniU',
		ensayo:'',
    },
	{
		id:'18',
        nombre: 'Digno',
        autor: 'Marcos Brunet',
        categoria: 'adoracion, Digno, no tengo nada para ofrecer, multitud de errores,  ',
        url: 'Digno',
        tone:'12',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=xe4KumGJJso',
		ensayo:'',
    },
	{
		id:'19',
        nombre: 'Oh Luz del mundo',
        autor: 'Hillsong',
        categoria: 'adoracion, oh luz del mundo, vengo a adorarte, vengo a postrarme, digno, bello, maravilloso,  ',
        url: 'OhLuzDelMundo',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=hRyyU-OfUIU',
		ensayo:'',
    },
	{
		id:'20',
        nombre: 'Este es mi deseo',
        autor: 'danilo montero',
        categoria: 'adoracion, este es mi deseo, hoy te rindo mi ser, entrega,   ',
        url: 'EsteEsMiDeseo',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=I5MHlK1Vn5w',
		ensayo:'',
    },
	{
		id:'21',
        nombre: 'Al que es digno',
        autor: 'Marcos Witt',
        categoria: 'alabanza, al que es digno, levantemos nuestras manos y adoremos,   ',
        url: 'AlQueEsDigno',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=JYatPW2O3-4',
		ensayo:'alQueEsDigno.mp4',
    },
	{
		id:'22',
        nombre: 'De Gloria en gloria',
        autor: 'Marco Barrientos',
        categoria: 'alabanza, yo quiero ver, de gloria en gloria  ',
        url: 'YoQuieroVer',
        tone:'21',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=aO3HChcNdjA',
		ensayo:'deGloriaEnGloria.mp4',
    },
	{
		id:'23',
        nombre: 'Hossana',
        autor: 'Marco Barrientos',
        categoria: 'alabanza, levantamos un clamor, hossana al rey de salvacion, rey ',
        url: 'Hossana',
        tone:'22',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=iLQbUfNwz9Y',
		ensayo:'',
    },
	{
		id:'24',
        nombre: 'Eres tu la unica razon',
        autor: 'Rojo',
        categoria: 'alabanza, Eres tu la unica razon, Te alabare',
        url: 'EresTuLaUnicaRazon',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=xMwzA_iYDfs',
		ensayo:'',
    },
	{
		id:'25',
        nombre: 'Te doy gloria',
        autor: 'En Espiritu y en Verdad',
        categoria: 'alabanza, te doy gloria, cuan hermoso eres jesus, gloria, ',
        url: 'TeDoyGloria',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=hpoMhat3jus',
		ensayo:'',
    },
	{
		id:'26',
        nombre: 'Dios de lo imposible',
        autor: 'Marco Barrientos',
        categoria: 'adoracion, jesucristo reina con poder, dios de lo imposible, poder, invencible, gloria ',
        url: 'DiosDeLoImposible',
        tone:'23',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=hH-o8vCO2r0',
		ensayo:'',
    },
	{
		id:'27',
        nombre: 'Recibe toda la gloria',
        autor: 'Claudio Freidzon',
        categoria: 'adoracion, quiero levantar a ti mis manos, creo en ti jesus, recibe toda la gloria, exaltacion ',
        url: 'RecibeTodaLaGloria',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=OYw3b0PtnE4',
		ensayo:'',
    },
	{
		id:'28',
        nombre: 'Soberano',
        autor: '?',
        categoria: 'adoracion, Soberano,  ',
        url: 'Soberano',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'29',
        nombre: 'Atraeme a ti',
        autor: 'Hillsong',
        categoria: 'adoracion, atraeme a ti, te anhelo dios, necesidad, ',
        url: 'AtraemeATi',
        tone:'12',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=m6jhN4sI5YU',
		ensayo:'',
    },
		{
		id:'30',
        nombre: 'A tus pies',
        autor: 'Miel San Marcos',
        categoria: 'adoracion, a tus pies, no hay lugar mas alto, perdon, exaltacion ',
        url: 'ATusPies',
        tone:'12',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=T07Yraic6oQ',
		ensayo:'',
    },
	{
		id:'31',
        nombre: 'Has ganado la victoria',
        autor: 'Marco Barrientos',
        categoria: 'alabanza, has ganado la victoria, porque tu eres mi dios, victoria,  ',
        url: 'HasGanado',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=x5zJcdyb8Ng',
		ensayo:'',
    },
	{
		id:'32',
        nombre: 'Al que esta sentado en el trono',
        autor: 'Marcos brunet',
        categoria: 'adoracion, quiero conocerte, al que esta sentado en el trono,  ',
        url: 'QuieroConocerte',
        tone:'20',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=mYQqmiUA9ps',
		ensayo:'',
    },
	{
		id:'33',
        nombre: 'Señor señor jesus',
        autor: '?',
        categoria: 'adoracion, señor señor jesus, gloria a ti yo dare ',
        url: 'SenorSenorJesus',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=Vkg18hqs0pM',
		ensayo:'',
    },
		{
		id:'34',
        nombre: 'Solo en ti',
        autor: 'Evan Craft',
        categoria: 'adoracion, en medio de problemas, mi salvador por siempre, no temere estas conmigo, esperanza, problemas',
        url: 'SoloEnTi',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=HoMl6PYKS1A',
		ensayo:'ensayo.mp4',
    },
	{
		id:'35',
        nombre: 'No hay otro nombre',
        autor: 'Hillsong',
        categoria: 'adoracion, Quien reina con  poder, Ven a adorar al que resucitó',
        url: 'NoHayOtroNombre',
        tone:'22',
		tempo:'75',
		tonalidad:'F',
		youtube:'https://www.youtube.com/watch?v=2BuifDijlFY',
		ensayo:'ensayo.mp4',
    },
	{
		id:'36',
        nombre: 'Solo a ti',
        autor: 'Marcela Gandara',
        categoria: 'adoracion, solo a ti sea la gloria, no existen mas motivos, ',
        url: 'soloATi',
        tone:'23',
		tempo:'',
		tonalidad:'B',
		youtube:'https://www.youtube.com/watch?v=ey5K99X9k1I',
		ensayo:'',
    },
	{
		id:'37',
        nombre: 'Queremos a cristo proclamar',
        autor: 'marcos barrientos',
        categoria: 'alabanza, queremos a cristo proclamar, queremos ver a jesucristo como rey, paso a paso hacia el frente',
        url: 'queremosACristoProclamar',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=IUNQbC_XxR4',
		ensayo:'',
    },
	{
		id:'38',
        nombre: 'Mi Dios',
        autor: 'Rojo',
        categoria: 'adoracion, Dios de milagros y amor, mi Dios es grande mi Dios es fuerte, y si Dios con nosotros, quien pues contra nosotros',
        url: 'MiDios',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=8IACEP9ZqlU&feature=youtu.be',
		ensayo:'',
    },
	{
		id:'39',
        nombre: 'Tu pueblo dice gracias',
        autor: 'Jacobo Ramos',
        categoria: 'alabanza, oh cuan amor inagotable, tu pueblo dice gracias, gratitud, grandes cosas ha hecho Dios por su pueblo',
        url: 'TuPuebloDiceGracias',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=UNYJhkqJhxs',
		ensayo:'',
    },
	{
		id:'40',
        nombre: 'Eres fiel',
        autor: 'Coalo Zamorano',
        categoria: 'alabanza, Señor eres fiel, te adoramos hoy',
        url: 'SeñorEresFiel',
        tone:'19',
		tempo:'',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=7w8OHGcy77c',
		ensayo:'senorEresFiel.mp4',
    },
	{
		id:'41',
        nombre: 'Mi pan mi luz',
        autor: 'Marcos Witt',
        categoria: 'adoracion, al entrar a tu santo lugar, mi pan mi luz',
        url: 'MiPan',
        tone:'21',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=uTpc5kdDefU',
		ensayo:'',
    },
	{
		id:'42',
        nombre: 'Dios que Adoramos',
        autor: 'La IBI',
        categoria: 'alabanza, el dios que hizo los cielos y la tierra, tu eres el dios que adoramos ',
        url: 'DiosQueAdoramos',
        tone:'15',
		tempo:'110',
		tonalidad:'A',
		youtube:'https://www.youtube.com/watch?v=RSAsPD3DN2A',
		ensayo:'',
    },
	{
		id:'43',
        nombre: 'Hay Libertad',
        autor: 'La IBI',
        categoria: 'alabanza, libertad, las cadenas de la muerte me quito, rompio mis cadenas me dio vida nueva ',
        url: 'hayLibertad',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=tKe8DfYi4YU',
		ensayo:'',
    },
	{
		id:'44',
        nombre: 'Ven es hora de adorarle',
        autor: 'Marco Barrientos',
        categoria: 'alabanza, Ven es hora de adorarle, toda lengua confesara que el es Dios ',
        url: 'VenEsHora',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=tKe8DfYi4YU',
		ensayo:'',
    },
	{
		id:'45',
        nombre: 'El tiempo de cantar',
        autor: 'Gerry Marquez',
        categoria: 'alabanza, el tiempo de cantar llego, enciende señor a tu novia, con cantos de alegria, voy a seguir a jesus',
        url: 'ElTiempoDeCantar',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=nLq5bLigZ2k',
		ensayo:'',
    },
	{
		id:'46',
        nombre: 'Quiero enamorarme mas de ti',
        autor: 'En tu presencia',
        categoria: 'adoracion, cuando pienso en tu amor, quiero enamorarme mas de ti',
        url: 'QuieroEnamorarmeMas',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=CBJ-PuOd3Iw',
		ensayo:'',
    },
	{
		id:'47',
        nombre: 'Gracia sublime es',
        autor: 'En espiritu y en verda',
        categoria: 'alabanza, quien rompe el poder de el pecado, gracia sublime es',
        url: 'GraciaSublimeEs',
        tone:'20',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=76o7NBgmh88',
		ensayo:'',
    },
	{
		id:'48',
        nombre: 'Adorad al cordero santo',
        autor: 'Marco Barrientos',
        categoria: 'Adoracion, Adorad al cordero santo, y vuestras manos alzad',
        url: 'AdoradAlCorderoSanto',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=nnqjW6d9UfQ',
		ensayo:'',
    },
	{
		id:'49',
        nombre: 'yo soy libre',
        autor: 'David Quilan',
        categoria: 'Alabanza, libre para correr, los ciegos veran por ti',
        url: 'YoSoyLibre',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=vH06ASve7_Q',
		ensayo:'',
    },
	{
		id:'50',
        nombre: 'Jesus es el centro',
        autor: 'Israel Houghton',
        categoria: 'Adoracion, El centro de todo eres jesus, tu eres el centro',
        url: 'ElCentroDeTodo',
        tone:'22',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=KqdAPdZSEdI',
		ensayo:'',
    },
	{
		id:'51',
        nombre: 'Porque tu estas presente',
        autor: 'Asaph Borba',
        categoria: 'Adoracion, porque tu estas presente',
        url: 'PorqueTuEstasPresente',
        tone:'12',
		tempo:'',
		tonalidad:'D',
		youtube:'https://www.youtube.com/watch?v=m2SEJb_Jt58',
		ensayo:'',
    },
	{
		id:'52',
        nombre: 'Hasta que no respire mas',
        autor: 'Rojo',
        categoria: 'Adoracion, cuando mas lo necesite, jesus te quiero amar',
        url: 'HastaQueNoRespireMas',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=ARZrZgjsJKA',
		ensayo:'',
    },
	{
		id:'53',
        nombre: 'Revelacion',
        autor: 'Danilo Montero',
        categoria: 'Adoracion, Digno es el cordero santo, santo santo santo, Dios todo poderoso',
        url: 'Revelacion',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=yLVit24s07M',
		ensayo:'',
    },
	{
		id:'54',
        nombre: 'Me has atraido jesus',
        autor: 'Jesus Adrian Romero',
        categoria: 'Alabanza, me has atraido jesus, jesus es fuente de vida y es amor',
        url: 'MeHasAtraido',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=gm6jMsgassw&feature=youtu.be',
		ensayo:'meHasAtraido.mp4',
    },
	{
		id:'55',
        nombre: 'No me soltaras',
        autor: 'Rojo',
        categoria: 'Adoracion, aunque yo este, no me soltaras',
        url: 'NoMeSoltaras',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=weXCJECG1XQ&feature=youtu.be',
		ensayo:'noMeSoltaras.mp4',
    },
	{
		id:'56',
        nombre: 'Asi como david danzaba',
        autor: '?',
        categoria: 'Alabanza, cuando el señor hiciere volver la cautividad, me gozare en jehova',
        url: 'CuandoElSeñorHiciereVolver',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=JXoLxXxSp8k',
		ensayo:'',
    },
	{
		id:'57',
        nombre: 'Vamos a Cantar',
        autor: 'En Espiritu y en Verdad',
        categoria: 'Alabanza, vamos a cantar, amamos todo de ti',
        url: 'VamosACantar',
        tone:'21',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=cI5bRniKWf4',
		ensayo:'',
    },
	{
		id:'58',
        nombre: 'Bendito jesus',
        autor: 'Danilo Montero',
        categoria: 'Alabanza, por ti es mi clamor, mi deseo eres tu',
        url: 'BenditoJesus',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=gcqlUbmTSHA',
		ensayo:'',
    },
	{
		id:'59',
        nombre: 'Ven a este lugar',
        autor: 'Danilo Montero',
        categoria: 'Adoracion, tu que estas sentado, ven a este lugar',
        url: 'VenAEsteLugar',
        tone:'12',
		tempo:'',
		tonalidad:'C',
		youtube:'https://www.youtube.com/watch?v=gcqlUbmTSHA',
		ensayo:'',
    },
	{
		id:'60',
        nombre: 'Dios Incomparable',
        autor: 'Marco Barrientos',
        categoria: 'Adoracion, rey de mi corazon, eres Dios eterno solo tu eres bueno',
        url: 'DiosIncomparable',
        tone:'12',
		tempo:'',
		tonalidad:'E',
		youtube:'https://www.youtube.com/watch?v=WmcSy89s9Ww',
		ensayo:'',
    },
	{
		id:'61',
        nombre: 'Te Adoro',
        autor: 'Danilo Montero',
        categoria: 'Adoracion, cuando pienso en tu, te adoro',
        url: 'TeAdoro',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=pFnZ9drgP_c',
		ensayo:'',
    },
	{
		id:'62',
        nombre: 'Que Dulce es estar',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, que dulce es estar en tu presencia, santo',
        url: 'QueDulceEsEstar',
        tone:'12',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=6l17YX_Ao6U',
		ensayo:'',
    },
	{
		id:'63',
        nombre: 'Tu lo llenas todo',
        autor: 'Mike Bunster',
        categoria: 'Adoracion, tu lo llenas todo, el universo gira en torno a ti',
        url: 'TuLoLlenasTodo',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'https://www.youtube.com/watch?v=MbX72jFqvP4',
		ensayo:'',
    },
	{
		id:'64',
        nombre: 'Cada Mañana',
        autor: '?',
        categoria: 'Alabanza, cada mañana, tus misericordias se renuevan, mira los lirios del campo',
        url: 'CadaManana',
        tone:'0',
		tempo:'',
		tonalidad:'E',
		youtube:'',
		ensayo:'',
    },
	{
		id:'65',
        nombre: 'Abre los cielos hoy',
        autor: 'En tu presencia',
        categoria: 'Alabanza, padre quiero estar en tu presencia, abre los cielos hoy, puedes mi pasion sentir',
        url: 'AbreLosCielosHoy',
        tone:'0',
		tempo:'',
		tonalidad:'C',
		youtube:'',
		ensayo:'',
    },
	{
		id:'66',
        nombre: 'Porque para siempre oh Dios',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, porque para siempre oh Dios, mi alma lo sabe bien',
        url: 'PorqueParaSiempreDios',
        tone:'0',
		tempo:'',
		tonalidad:'D',
		youtube:'',
		ensayo:'',
    },
	{
		id:'67',
        nombre: 'De Gloria en Gloria te veo',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, de gloria en gloria te veo, quiero ser mas como tu',
        url: 'DeGloriaEnGloriaTeVeo',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'68',
        nombre: 'Tu Amor por mi',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, tu amor por mi es mas dulce que la miel, es por eso que te alabo',
        url: 'TuAmorPorMi',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'69',
        nombre: 'Majestuoso Poderoso',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, Majestuoso poderoso digno de loor, jesucristo es rey',
        url: 'MajestuosoPoderoso',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'70',
        nombre: 'Poderoso de israel',
        autor: 'Marcos Witt',
        categoria: 'Alabanza, es el poderoso de israel, y de noche cantaremos su poder',
        url: 'PoderosoDeIsrael',
        tone:'0',
		tempo:'',
		tonalidad:'C',
		youtube:'',
		ensayo:'',
    },
	{
		id:'71',
        nombre: 'Oh Moradora de Sion',
        autor: 'Marcos Witt',
        categoria: 'Alabanza, Oh Moradora de sion, grande es jehova, tu eres grande jehova',
        url: 'ohMoradoraDeSion',
        tone:'9',
		tempo:'',
		tonalidad:'C',
		youtube:'',
		ensayo:'',
    },
	{
		id:'72',
        nombre: 'Quien nos separara',
        autor: 'Marcos Witt',
        categoria: 'Alabanza, quien nos seprara, en cristo somos mas que vencedores',
        url: 'QuienNosSeparara',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'73',
        nombre: 'Bueno es alabar',
        autor: 'Danilo Montero',
        categoria: 'Alabanza, bueno es alabar al señor, porque grande eres tu',
        url: 'BuenoEsAlabar',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'74',
        nombre: 'Rey',
        autor: 'Christine d clairo',
        categoria: 'Alabanza, en tu presencia danzamos libres, tu iglesia clama hoy abre los cielos',
        url: 'TuIglesiaClamaHoy',
        tone:'0',
		tempo:'',
		tonalidad:'E',
		youtube:'',
		ensayo:'',
    },
	{
		id:'75',
        nombre: 'Yo te busco',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, yo te busco, te anhelo te necesito',
        url: 'YoTeBusco',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'76',
        nombre: 'Te Exaltamos',
        autor: '?',
        categoria: 'Adoracion, seas exaltado Dios, te exaltamos',
        url: 'TeExaltamos',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'77',
        nombre: 'Cambiare mi Tristeza',
        autor: 'vertical',
        categoria: 'Alabanza, cambiare mi tristeza, si señor si si señor, estando atribulado pero nunca derrotado',
        url: 'CambiareMiTristeza',
        tone:'0',
		tempo:'',
		tonalidad:'A',
		youtube:'',
		ensayo:'',
    },
	{
		id:'78',
        nombre: 'Jesus eres mi buen pastor',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, cerca de ti yo quiero estar, jesus eres mi buen pastor',
        url: 'CercaDeTi',
        tone:'0',
		tempo:'',
		tonalidad:'A',
		youtube:'',
		ensayo:'',
    },
	{
		id:'79',
        nombre: 'Purificame',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, purificame, limpiame señor, enseñame tu camino señor',
        url: 'Purificame',
        tone:'0',
		tempo:'',
		tonalidad:'A',
		youtube:'',
		ensayo:'',
    },
	{
		id:'80',
        nombre: 'Quiero Escuchar tu dulce voz',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, quiero escuchar tu dulce voz, no podria estar ante ti ',
        url: 'QuieroEscucharTuDulce',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'81',
        nombre: 'Se exalta a nuestro Dios',
        autor: 'Marcos Witt',
        categoria: 'Alabanza, se exalta a nuestro Dios, con trompetas hay que celebrar',
        url: 'SeExaltaANuestroDios',
        tone:'0',
		tempo:'',
		tonalidad:'C',
		youtube:'',
		ensayo:'',
    },
	{
		id:'82',
        nombre: 'Cuan Bello es el señor',
        autor: 'Marcos Witt',
        categoria: 'Adoracion, cuan bello es el señor, la belleza de mi señor',
        url: 'CuanBelloEsElSenor',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'83',
        nombre: 'Jesus señor de la creacion',
        autor: 'Jesus Adrian Romero',
        categoria: 'Adoracion, jesus señor de la creacion, mas Dios a lo sumo lo exalto',
        url: 'MasDios',
        tone:'0',
		tempo:'',
		tonalidad:'G',
		youtube:'',
		ensayo:'',
    },
	{
		id:'84',
        nombre: 'Cantos de loor',
        autor: 'Asaph Borba',
        categoria: 'Alabanza, el espiritu del señor esta sobre mi, corona en vez de ceniza',
        url: 'CantosDeLoor',
        tone:'0',
		tempo:'',
		tonalidad:'D',
		youtube:'',
		ensayo:'',
    }
	
    ];
	
	var index=0;
	for(index=0; index< $scope.canciones.length; index++){
			if($scope.canciones[index].youtube=='')
				$scope.canciones[index].visibleYoutube="disabled";
			if($scope.canciones[index].ensayo=='')
				$scope.canciones[index].visibleEnsayo="disabled";
		}

	$scope.ModificarLugar = function (id, sube) {
		var url=window.location.href.split("?")[1];
		url=url.split("=")[1];
		var listSongs=url.split("||");
		
		var i=0;
		var index=0;
		for(i=0; i<listSongs.length; i++){
			listSongs[i]=listSongs[i].replace("|","");
			if(listSongs[i]==id){
				index=i;
			}
		}
		if(sube==1)//si hay que bajarlo
		{
			if(index!=i-1)
			{
				var oldValue=listSongs[index];
				var newValue=listSongs[index+1];
				listSongs[index]=newValue;
				listSongs[index+1]=oldValue;
			}
		}
		else//si hay que subirlo
		{
			if(index!=0)
			{
				var oldValue=listSongs[index];
				var newValue=listSongs[index-1];
				listSongs[index]=newValue;
				listSongs[index-1]=oldValue;
			}
		}
		
		var parameters="&selected=";
		for(i=0; i<listSongs.length; i++){
			parameters=parameters+"|"+listSongs[i]+"|";
		}
		 
		window.location.href =window.location.href.split("?")[0]+"?"+parameters;
		
		
	}
	$scope.Agregar = function (id) {
       
	   var url=window.location.href;
	    if(!url.includes("?"))
			url=url+"?";
	   
	   if(url.includes("selected"))
	   {
		   url=url+"|"+id+"|";
	   }
	   else
	   {
		   url=url+"selected=|"+id+"|";
	   }
	   window.location.href = url; 
    };
	
	$scope.Ver = function (url, test) {
       if(test!="disabled")
	   window.location.href = url; 
    };
	
	
	
	$scope.Eliminar = function (id) {
       
	   var url=window.location.href;
	   if(url.includes("|"+id+"|"))
	   {
		   url=url.replace("|"+id+"|", "");
	   }
	   
	   window.location.href = url;

	   
    };
	
	var url=window.location.href;
	if( getParameterByName("selected")!="")
	{
		var div = document.getElementById("titleSelectedSongs");
		div.style.visibility  = "visible";
		var div2 = document.getElementById("tableSelected");
		div2.style.visibility  = "visible";
		
		var songsSelectedId=getParameterByName("selected");
		var arraySongsSelected=songsSelectedId.split('||');
		
		var i=0;
		for(i=0; i<arraySongsSelected.length; i++){
			arraySongsSelected[i]=arraySongsSelected[i].replace("|","");
			arraySongsSelected[i]=arraySongsSelected[i].replace("|","");
		}
		
		var i;
		var j;
		for (i = 0; i < arraySongsSelected.length; i++) {
			for(j=0; j< $scope.canciones.length; j++){
				 if($scope.canciones[j].id==arraySongsSelected[i])
				 {
					 $scope.selectedSongs= $scope.selectedSongs.concat($scope.canciones[j]);
				 }
			}
		}
	}
	else
	{
		var div = document.getElementById("titleSelectedSongs");
		div.style.visibility  = "hidden";
		var div2 = document.getElementById("tableSelected");
		div2.style.visibility  = "hidden";
	}
	

});

app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});


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
