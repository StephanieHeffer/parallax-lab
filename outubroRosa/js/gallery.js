      let imagecountmen = 1;
      let totalmen = 5;

    window.setInterval(function slidegalleryAmen(){
      let imagemen = document.getElementById('imgGalMen');
      imagecountmen = imagecountmen + 1;
      if(imagecountmen > totalmen){ imagecountmen = 1;}
      if(imagecountmen < 1){imagecountmen = totalmen;}
      imagemen.src = "imagesmobile/imagem"+ imagecountmen + ".jpg";
    }, 3000);


    let imagecountfem = 1;
    let totalfem = 5;

        window.setInterval(function slidegalleryAfem(){
          let imagefem = document.getElementById('imgGalFem');
          imagecountfem = imagecountfem + 1;
          if(imagecountfem > totalfem){ imagecountfem = 1;}
          if(imagecountfem < 1){imagecountfem = totalfem;}
          imagefem.src = "imagesmobile/img"+ imagecountfem + ".jpg";
        }, 3000);
