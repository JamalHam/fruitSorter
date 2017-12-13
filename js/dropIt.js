    var fruitFilter, colourFilter;
    
    function updateFilters(){
        $(".box").hide().filter(function(){
            var 
                self =$(this),
                result = true;   
            /* these two if statement directly target each select drop down menu*/
            
            if(fruitFilter && (fruitFilter != "None")){
                result = result && fruitFilter === self.data("fruit");
            }
            
            if(colourFilter && (colourFilter != "None")){
                result = result && colourFilter === self.data("colour");
            }
            
            return result;
        }).fadeIn(1000);
    }
    
    /*stores the updated filter*/
   
    $("#assigned-fruit-filter").on("change", function(event){
        fruitFilter = this.value;
    });
    
    $("#assigned-colour-filter").on("change", function(event){
        colourFilter = this.value;
    });
    
      /* triggers the update*/
    $('#go').click(function(){
        updateFilters();  
    });

  $(".header #all").on('click',function(){
   	 $(".filters #assigned-colour-filter").val($("#assigned-colour-filter option:first").val());
     $(".filters #assigned-fruit-filter").val($("#assigned-fruit-filter option:first").val());
	  colourFilter = this.value;
	  fruitFilter = this.value;
	  updateFilters();		
	 $(".box").fadeIn(2000); 
  });