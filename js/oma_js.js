$(document).ready(function() {
   
    $("#tuloksetk").hide();
  });

$(document).ready(function() {
    $('#kuva1').mouseenter(function() {
      $(this).animate({width: '20%', height: '20%'}, 'slow');
      $(this).animate({width: '50%', height: '50%'}, 'slow');
    });
  });

  $(document).ready(function() {
    $('#kuva2').mouseenter(function() {
      $(this).fadeOut("fast");
      $(this).fadeIn("slow");
    });
  });

  $(document).ready(function() {
    $('#kuva3').mouseenter(function() {
        $(this).animate({opacity:0.5}, 'fast', );
    });
  });

  $(document).ready(function() {
    $('#kuva4').mouseenter(function() {
        $(this).animate({width: '25%', height: '25%'}, 'fast');
    });
  });

  $(document).ready(function() {
    $('#kuva5').mouseenter(function() {
      $(this).animate({rotate: '90deg'}, 'slow');
      $(this).animate({rotate: '180deg'}, 'slow');
    });
  });

  $(document).ready(function() {
    $('#kuva6').mouseenter(function() {
        $(this).animate({opacity:0.2}, 'slow', );
        $(this).animate({rotate: '90deg'}, 'slow');
        $(this).animate({opacity:1}, 'slow', );
        $(this).animate({rotate: '180deg'}, 'slow');

   
  
    });
  });

  $(document).ready(function() {
    $('#kuva7').mouseenter(function() {
      $(this).animate({width: '20%', height: '20%'}, 'slow');
      $(this).animate({rotate: '180deg'}, 'slow');
      $(this).animate({width: '70%', height: '70%'}, 'slow');
    });
  });

  $(document).ready(function() {
    $('#kuva8').mouseenter(function() {
        $(this).animate({opacity: 0.5, left: "+=50", height: "toggle"}, 5000,)

    });
  });

  $(document).ready(function() {
    $('#kuva9').mouseenter(function() {
        $(this).animate({opacity: 0.5, left: "+=50", height: "+=100"}, 2000,)
    });
  });

  $(document).ready(function() {
    $('#kuva10').mouseenter(function() {
      $(this).animate({width: '20%', height: '20%'}, 'slow');
      $(this).animate({rotate: '180deg'}, 'slow');
      $(this).animate({opacity: 0.5, left: "+=50", height: "+=100"}, 2000,)
      $(this).animate({rotate: '90deg'}, 'slow');
      $(this).animate({opacity: 0.5, left: "+=50", height: "toggle"}, 5000,)
    });
  });


  $(document).ready(function() {
    $('#tulos').click(function() {
      var OikeatVastaukset = 0;
      var vastaus1 = $('#kysymys1').val().toLowerCase().trim();
      var vastaus2 = $('#kysymys2').val().toLowerCase().trim();
      var vastaus3 = $('#kysymys3').val().toLowerCase().trim();
      var vastaus4 = $('#kysymys4').val().toLowerCase().trim();
      var vastaus5 = $('#kysymys5').val().toLowerCase().trim();
      var vastaus6 = $('#kysymys6').val().toLowerCase().trim();
      var vastaus7 = $('#kysymys7').val().toLowerCase().trim();
      var vastaus8 = $('#kysymys8').val().toLowerCase().trim();
      var vastaus9 = $('#kysymys9').val().toLowerCase().trim();
      var vastaus10 = $('#kysymys10').val().toLowerCase().trim();
      
      if (vastaus1 === 'espanja') {
        OikeatVastaukset++;
      }
      if (vastaus2 === 'australia') {
        OikeatVastaukset++;
      }
      if (vastaus3 ==='kiina') {
        OikeatVastaukset++;
      }
      if (vastaus4 === 'saksa') {
        OikeatVastaukset++;
      }
      if (vastaus5 === 'italia') {
        OikeatVastaukset++;
      }
      if (vastaus6 === 'senegal') {
        OikeatVastaukset++;
      }
      if (vastaus7 === 'thaimaa') {
        OikeatVastaukset++;
      }
      if (vastaus8 === 'turkki') {
        OikeatVastaukset++;
      }
      if (vastaus9 === 'uruguay') {
        OikeatVastaukset++;
      }
      if (vastaus10 === 'vietnam') {
        OikeatVastaukset++;
      }
      $("#kysymykset").fadeOut("fast");
      $('#tulokset').html('Sait ' + OikeatVastaukset + ' oikeaa vastausta.');
      $("#tuloksetk").fadeIn("fast");
      anime({
        targets: '#tuloksetk',
        opacity: [0, 1],
        scale: [0.2, 1],
        duration: 4000,
       
      });
    });
  });
  

