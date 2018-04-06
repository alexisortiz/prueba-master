
var app = angular.module("Search", []);
app.controller("ControllerList", ['$scope', '$filter', '$http', function ($scope, $filter){
    $scope.names=[
        {
            "first_name": "Rinah",
            "last_name": "Maldonado",
            "email": "mi.enim@adipiscingfringillaporttitor.edu",
            "fecha": "04/05/2018",
            "total": "$55,867"
        },
        {
            "first_name": "Vivian",
            "last_name": "Diaz",
            "email": "eget@tellusPhaselluselit.org",
            "fecha": "04/05/2018",
            "total": "$58,046"
        },
        {
            "first_name": "Ria",
            "last_name": "Haney",
            "email": "turpis.nec.mauris@gravidamauris.edu",
            "fecha": "04/06/2018",
            "total": "$44,365"
        },
        {
            "first_name": "Julie",
            "last_name": "Lawson",
            "email": "eget.metus.eu@purusac.net",
            "fecha": "04/03/2018",
            "total": "$00,410"
        },
        {
            "first_name": "Geoffrey",
            "last_name": "Russell",
            "email": "Proin.vel.arcu@auctor.co.uk",
            "fecha": "04/02/2018",
            "total": "$67,434"
        },
        {
            "first_name": "Timon",
            "last_name": "Harding",
            "email": "convallis.ante@anteiaculisnec.ca",
            "fecha": "04/02/2018",
            "total": "$26,837"
        },
        {
            "first_name": "Chloe",
            "last_name": "Velazquez",
            "email": "malesuada.augue.ut@Proin.ca",
            "fecha": "04/03/2018",
            "total": "$33,675"
        },
        {
            "first_name": "Ciara",
            "last_name": "Haley",
            "email": "a@ligulaNullamfeugiat.co.uk",
            "fecha": "04/02/2018",
            "total": "$40,843"
        },
        {
            "first_name": "Prescott",
            "last_name": "Hooper",
            "email": "vitae.odio@uterosnon.ca",
            "fecha": "04/05/2018",
            "total": "$80,242"
        },
        {
            "first_name": "Colton",
            "last_name": "Carr",
            "email": "facilisis.lorem@IntegermollisInteger.com",
            "fecha": "04/06/2018",
            "total": "$73,770"
        },
        {
            "first_name": "Victor",
            "last_name": "Calderon",
            "email": "dictum.cursus@iaculisodioNam.org",
            "fecha": "04/04/2018",
            "total": "$61,906"
        },
        {
            "first_name": "Daryl",
            "last_name": "Bradford",
            "email": "odio.Etiam@enimSed.ca",
            "fecha": "04/03/2018",
            "total": "$27,082"
        },
        {
            "first_name": "Hu",
            "last_name": "Stokes",
            "email": "non@risus.com",
            "fecha": "04/04/2018",
            "total": "$61,975"
        },
        {
            "first_name": "Joy",
            "last_name": "Dyer",
            "email": "Nunc.commodo@quamPellentesque.ca",
            "fecha": "04/03/2018",
            "total": "$32,880"
        },
        {
            "first_name": "Jarrod",
            "last_name": "Solomon",
            "email": "aliquet.metus.urna@elit.com",
            "fecha": "04/05/2018",
            "total": "$44,641"
        },
        {
            "first_name": "Leo",
            "last_name": "Stevens",
            "email": "malesuada.fames@Praesenteudui.ca",
            "fecha": "04/05/2018",
            "total": "$83,156"
        },
        {
            "first_name": "Latifah",
            "last_name": "Talley",
            "email": "ut.aliquam@ipsum.co.uk",
            "fecha": "04/03/2018",
            "total": "$31,825"
        },
        {
            "first_name": "Brian",
            "last_name": "Albert",
            "email": "ultricies.ornare.elit@egestasurnajusto.edu",
            "fecha": "04/05/2018",
            "total": "$03,637"
        },
        {
            "first_name": "Oliver",
            "last_name": "Sloan",
            "email": "Integer.eu@ridiculusmus.edu",
            "fecha": "04/02/2018",
            "total": "$32,226"
        },
        {
            "first_name": "Jescie",
            "last_name": "Higgins",
            "email": "est.mauris.rhoncus@pulvinar.edu",
            "fecha": "04/03/2018",
            "total": "$20,002"
        },
        {
            "first_name": "Thomas",
            "last_name": "Bradshaw",
            "email": "eros@Innecorci.com",
            "fecha": "04/03/2018",
            "total": "$53,937"
        },
        {
            "first_name": "Sydnee",
            "last_name": "Trevino",
            "email": "Donec.sollicitudin.adipiscing@eu.com",
            "fecha": "04/05/2018",
            "total": "$92,483"
        },
        {
            "first_name": "Teegan",
            "last_name": "Flowers",
            "email": "ligula.tortor.dictum@dignissim.net",
            "fecha": "04/03/2018",
            "total": "$51,517"
        },
        {
            "first_name": "Wynter",
            "last_name": "Melendez",
            "email": "eleifend.nunc.risus@enim.co.uk",
            "fecha": "04/02/2018",
            "total": "$17,748"
        },
        {
            "first_name": "Hedley",
            "last_name": "Mcfarland",
            "email": "Vivamus.nisi@eratvitaerisus.ca",
            "fecha": "04/02/2018",
            "total": "$88,604"
        },
        {
            "first_name": "Lacy",
            "last_name": "Harrington",
            "email": "Ut.tincidunt.vehicula@vulputate.org",
            "fecha": "04/02/2018",
            "total": "$13,980"
        },
        {
            "first_name": "Carl",
            "last_name": "Riggs",
            "email": "risus.Morbi@nec.edu",
            "fecha": "04/01/2018",
            "total": "$03,298"
        },
        {
            "first_name": "Ayanna",
            "last_name": "Buck",
            "email": "Mauris.vestibulum@sit.ca",
            "fecha": "04/03/2018",
            "total": "$55,028"
        },
        {
            "first_name": "Cedric",
            "last_name": "Gilbert",
            "email": "sed@afelis.net",
            "fecha": "04/03/2018",
            "total": "$38,407"
        },
        {
            "first_name": "Devin",
            "last_name": "Cleveland",
            "email": "neque@arcueuodio.com",
            "fecha": "04/02/2018",
            "total": "$81,490"
        },
        {
            "first_name": "Willa",
            "last_name": "Gonzalez",
            "email": "nec.tempus@Phasellusdapibus.edu",
            "fecha": "04/04/2018",
            "total": "$48,677"
        },
        {
            "first_name": "Leo",
            "last_name": "Cruz",
            "email": "quis@consequat.com",
            "fecha": "04/06/2018",
            "total": "$02,733"
        },
        {
            "first_name": "Imogene",
            "last_name": "Odonnell",
            "email": "libero.at@laciniaSedcongue.net",
            "fecha": "04/05/2018",
            "total": "$08,379"
        },
        {
            "first_name": "Destiny",
            "last_name": "Talley",
            "email": "augue.eu.tempor@Maecenasmalesuada.co.uk",
            "fecha": "04/04/2018",
            "total": "$67,480"
        },
        {
            "first_name": "Kermit",
            "last_name": "Valenzuela",
            "email": "magna.et@apurusDuis.com",
            "fecha": "04/02/2018",
            "total": "$24,597"
        },
        {
            "first_name": "Heidi",
            "last_name": "Porter",
            "email": "nec@nequesed.ca",
            "fecha": "04/04/2018",
            "total": "$97,930"
        },
        {
            "first_name": "Alana",
            "last_name": "Daniel",
            "email": "arcu.Sed.et@Proinnislsem.ca",
            "fecha": "04/02/2018",
            "total": "$76,517"
        },
        {
            "first_name": "Carter",
            "last_name": "Horn",
            "email": "eu.metus.In@tinciduntnuncac.com",
            "fecha": "04/03/2018",
            "total": "$17,384"
        },
        {
            "first_name": "Chastity",
            "last_name": "Lott",
            "email": "bibendum.fermentum@metussit.edu",
            "fecha": "04/03/2018",
            "total": "$35,827"
        },
        {
            "first_name": "Cassandra",
            "last_name": "Cherry",
            "email": "nascetur.ridiculus@diam.ca",
            "fecha": "04/03/2018",
            "total": "$58,949"
        },
        {
            "first_name": "Jakeem",
            "last_name": "Vincent",
            "email": "mauris.elit@tristique.edu",
            "fecha": "04/02/2018",
            "total": "$20,303"
        },
        {
            "first_name": "Fritz",
            "last_name": "Davidson",
            "email": "ac.nulla.In@adipiscing.co.uk",
            "fecha": "04/02/2018",
            "total": "$39,441"
        },
        {
            "first_name": "Echo",
            "last_name": "Bowen",
            "email": "tempor.arcu.Vestibulum@nec.com",
            "fecha": "04/04/2018",
            "total": "$97,514"
        },
        {
            "first_name": "Brenda",
            "last_name": "Sosa",
            "email": "Donec@scelerisquedui.net",
            "fecha": "04/03/2018",
            "total": "$87,003"
        },
        {
            "first_name": "Hannah",
            "last_name": "Francis",
            "email": "venenatis.vel@etultrices.net",
            "fecha": "04/04/2018",
            "total": "$57,646"
        },
        {
            "first_name": "Ariana",
            "last_name": "Baxter",
            "email": "iaculis.nec.eleifend@amagnaLorem.org",
            "fecha": "04/01/2018",
            "total": "$28,337"
        },
        {
            "first_name": "Hedwig",
            "last_name": "Dickerson",
            "email": "pellentesque.tellus.sem@felisadipiscing.org",
            "fecha": "04/06/2018",
            "total": "$52,585"
        },
        {
            "first_name": "Gabriel",
            "last_name": "Roach",
            "email": "rhoncus@Donec.edu",
            "fecha": "04/04/2018",
            "total": "$85,063"
        },
        {
            "first_name": "Ali",
            "last_name": "Newton",
            "email": "a@odiovel.org",
            "fecha": "04/03/2018",
            "total": "$44,667"
        },
        {
            "first_name": "Debra",
            "last_name": "Blankenship",
            "email": "non@interdumlibero.edu",
            "fecha": "04/04/2018",
            "total": "$51,235"
        },
        {
            "first_name": "Mia",
            "last_name": "Clements",
            "email": "egestas@dolorelit.co.uk",
            "fecha": "04/06/2018",
            "total": "$95,447"
        },
        {
            "first_name": "Colette",
            "last_name": "Best",
            "email": "aliquet@lectuspede.net",
            "fecha": "04/06/2018",
            "total": "$97,261"
        },
        {
            "first_name": "Dana",
            "last_name": "Pope",
            "email": "malesuada.vel@commodo.com",
            "fecha": "04/01/2018",
            "total": "$11,354"
        },
        {
            "first_name": "Lesley",
            "last_name": "Clark",
            "email": "metus@auguescelerisquemollis.com",
            "fecha": "04/03/2018",
            "total": "$02,252"
        },
        {
            "first_name": "Benjamin",
            "last_name": "Perry",
            "email": "justo.Praesent.luctus@lacus.net",
            "fecha": "04/02/2018",
            "total": "$87,442"
        },
        {
            "first_name": "Kirestin",
            "last_name": "Fletcher",
            "email": "Donec.sollicitudin@vitaeerat.co.uk",
            "fecha": "04/03/2018",
            "total": "$02,655"
        },
        {
            "first_name": "Abigail",
            "last_name": "Rivers",
            "email": "ipsum@Inscelerisque.edu",
            "fecha": "04/05/2018",
            "total": "$30,668"
        },
        {
            "first_name": "Raphael",
            "last_name": "Shaffer",
            "email": "urna.justo@ametdiameu.org",
            "fecha": "04/03/2018",
            "total": "$73,224"
        },
        {
            "first_name": "Kiayada",
            "last_name": "Battle",
            "email": "ante@commodoipsumSuspendisse.edu",
            "fecha": "04/02/2018",
            "total": "$00,970"
        },
        {
            "first_name": "Uriah",
            "last_name": "Gonzales",
            "email": "Vivamus@Inmipede.ca",
            "fecha": "04/03/2018",
            "total": "$25,848"
        },
        {
            "first_name": "Madeson",
            "last_name": "Stout",
            "email": "mattis@natoque.co.uk",
            "fecha": "04/01/2018",
            "total": "$74,762"
        },
        {
            "first_name": "Gabriel",
            "last_name": "Levine",
            "email": "lacus.Ut@viverraMaecenasiaculis.org",
            "fecha": "04/04/2018",
            "total": "$88,765"
        },
        {
            "first_name": "Garth",
            "last_name": "Osborn",
            "email": "auctor@faucibus.co.uk",
            "fecha": "04/05/2018",
            "total": "$58,120"
        },
        {
            "first_name": "Sylvia",
            "last_name": "Black",
            "email": "Phasellus.libero.mauris@auctorvelit.edu",
            "fecha": "04/04/2018",
            "total": "$75,897"
        },
        {
            "first_name": "Yvonne",
            "last_name": "Skinner",
            "email": "neque.sed@pellentesque.ca",
            "fecha": "04/04/2018",
            "total": "$77,229"
        },
        {
            "first_name": "Jelani",
            "last_name": "Jennings",
            "email": "Quisque.porttitor.eros@enim.edu",
            "fecha": "04/05/2018",
            "total": "$22,727"
        },
        {
            "first_name": "Brynne",
            "last_name": "Payne",
            "email": "interdum.Nunc.sollicitudin@ultricesiaculisodio.edu",
            "fecha": "04/04/2018",
            "total": "$62,740"
        },
        {
            "first_name": "Ignacia",
            "last_name": "Guerrero",
            "email": "lobortis.quam@utnulla.edu",
            "fecha": "04/04/2018",
            "total": "$14,510"
        },
        {
            "first_name": "Kalia",
            "last_name": "Mayer",
            "email": "nisi@diamdictumsapien.co.uk",
            "fecha": "04/03/2018",
            "total": "$14,482"
        },
        {
            "first_name": "Hashim",
            "last_name": "Mathews",
            "email": "mi.Aliquam.gravida@vehiculaet.co.uk",
            "fecha": "04/03/2018",
            "total": "$36,336"
        },
        {
            "first_name": "Jason",
            "last_name": "Walls",
            "email": "luctus.ipsum@euerosNam.ca",
            "fecha": "04/06/2018",
            "total": "$45,990"
        },
        {
            "first_name": "Jemima",
            "last_name": "Whitney",
            "email": "elementum.lorem@ultrices.com",
            "fecha": "04/06/2018",
            "total": "$14,363"
        },
        {
            "first_name": "Hector",
            "last_name": "Martinez",
            "email": "nunc.Quisque@eratEtiam.ca",
            "fecha": "04/05/2018",
            "total": "$58,382"
        },
        {
            "first_name": "Quinn",
            "last_name": "Hunt",
            "email": "Donec.feugiat@tinciduntorciquis.ca",
            "fecha": "04/03/2018",
            "total": "$51,118"
        },
        {
            "first_name": "Maisie",
            "last_name": "Garner",
            "email": "et.risus.Quisque@metuseuerat.net",
            "fecha": "04/01/2018",
            "total": "$05,810"
        },
        {
            "first_name": "Jillian",
            "last_name": "Murphy",
            "email": "amet.lorem@malesuadavel.net",
            "fecha": "04/02/2018",
            "total": "$30,715"
        },
        {
            "first_name": "Ora",
            "last_name": "Price",
            "email": "nibh@Phasellusdolor.net",
            "fecha": "04/05/2018",
            "total": "$82,519"
        },
        {
            "first_name": "Eagan",
            "last_name": "Blankenship",
            "email": "id.blandit@eratvolutpat.com",
            "fecha": "04/06/2018",
            "total": "$33,913"
        },
        {
            "first_name": "Reuben",
            "last_name": "Knight",
            "email": "nunc.sit.amet@odioEtiam.net",
            "fecha": "04/04/2018",
            "total": "$44,702"
        },
        {
            "first_name": "Madeson",
            "last_name": "Chang",
            "email": "Quisque.ac@egestas.ca",
            "fecha": "04/04/2018",
            "total": "$62,251"
        },
        {
            "first_name": "Deirdre",
            "last_name": "Kim",
            "email": "magna.Nam.ligula@risusNulla.co.uk",
            "fecha": "04/05/2018",
            "total": "$56,406"
        },
        {
            "first_name": "Matthew",
            "last_name": "Pearson",
            "email": "turpis.Nulla@lacusUtnec.com",
            "fecha": "04/02/2018",
            "total": "$66,328"
        },
        {
            "first_name": "Bruno",
            "last_name": "Cobb",
            "email": "Praesent@sedhendrerit.net",
            "fecha": "04/06/2018",
            "total": "$85,150"
        },
        {
            "first_name": "Kameko",
            "last_name": "Fernandez",
            "email": "Nunc@bibendumsedest.net",
            "fecha": "04/05/2018",
            "total": "$00,100"
        },
    ];

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pagination = 0;
    $scope.currentPageBack=0;

    $scope.myFunction = function(num) {
        $scope.currentPage=num;
        var myEl = angular.element( document.querySelector( '.btn-' + num ) );
        myEl.parent().children().removeClass('activo');
        myEl.addClass('activo');
    }

    $scope.getData = function () {
        return $filter('filter')($scope.names, $scope.busca);

    }
    $scope.getNumber = function(pagination) {
        return new Array(Math.ceil($scope.getData().length/$scope.pageSize));
    }

    $scope.resetStart = function(){
        $scope.currentPage = 0;
        var myEl = angular.element( document.querySelector( '.btn-0' ) );
        myEl.parent().children().removeClass('activo');
        myEl.addClass('activo');
    }

}]);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
})