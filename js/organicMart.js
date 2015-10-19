// Initiating Objects of item using constructors 
var eggs = new item(9801, "eggs 1 Dz", 0, "box");
var eggs2 = new item(9802, "eggs 2 Dz", 0, "box");
var eggs3 = new item(98018, "eggs 18 counts", 0, "box");
var milk = new item(4301, "Milk 1 Gallon", 0, "box");
var milk2 = new item(4302, "Milk 2 Gallon", 0, "box");
var eggplant = new item(2210, "Eggplant", 0, "lb");
var RomaTomato = new item(2220, "Roma Tomato", 0, "lb");
var TomatoWshrub = new item(2221, "Tomato with Shrub", 0, "lb");
var YellowOnion = new item(2240, "Yellow Onion", 0, "lb");
var SweetOnion = new item(2241, " Sweet Onion", 0, "lb");
var Garlic = new item(2250, "Garlic", 0, "lb");
var Apples = new item(3110, "Apples", 0, "lb");
var Banana = new item(3120, "Banana", 0, "lb");
var Grapes = new item(3130, "Grapes", 0, "lb");
var mode = "";
var displaytxt = "";
var modesell = 0;
var modequery = 0;
var modestock = 0;
var invalid;
var oos = 0;
// Defining the object item's constructor
function item(Num, Type, Qty, Unit)
{
	this.iNumber = Num;
	this.iType = Type;
	this.iQty = Qty;
	this.iUnit = Unit;
}

function addStock()
{
	invalid = 0;// Flag for invalid input
	if(modestock == 0) // if mode changed, Clear Display Text
 	{
		displaytxt ="";
		mode = "Entered***";
		document.getElementById("disp2").innerHTML = mode;
	}
 
    var x = document.getElementById("barcode").value; 
    var q = document.getElementById("quant").value;
    var t = document.getElementById("type").value;
 	var y; // variable to help print selected item
 	q = parseInt(q);
 	
 	if(x == 9801)
 	{
 		 y = eggs;
 	 	
 	 	if(t == "box" && !isNaN(q) && (q >=0))
 		{
 			eggs.iQty = eggs.iQty + q;
		}
 		
 		else
		{
 			invalid = 1;
 		}	
 	}
 
 	else if(x == 9802)
 	{
 		y = eggs2;
 		if(t == "box" && !isNaN(q) && (q >=0))
 		{
 			eggs2.iQty = eggs2.iQty + q;
  		}
  		else
  		{
  			invalid = 1;
  		}
  
  	}
 
 	else if(x == 98018)
 	{
 		y = eggs3;
 		if(t == "box" && !isNaN(q) && (q >=0))
 		{
 			eggs3.iQty = eggs3.iQty + q;
		}
		else
 		{
			invalid = 1;
		}
 	}
 
 	else if(x == 4301)
 	{ 
 		y = milk;
 		if(t == "box" && !isNaN(q) && (q >=0))
 		{
 			milk.iQty = milk.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 4302)
 	{
 		y = milk2;
 		if(t == "box" && !isNaN(q) && (q >=0))
 		{
 			milk2.iQty = milk2.iQty + q; 
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}

 	else if(x == 2210)
 	{
 		y = eggplant;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			eggplant.iQty = eggplant.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
    else if(x == 2220)
 	{
 		y = RomaTomato;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			RomaTomato.iQty = RomaTomato.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 2221)
 	{
 		y = TomatoWshrub;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
			TomatoWshrub.iQty = TomatoWShrub.iQty + q;
		}	 
		else
		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 2240)
 	{
 		y = YellowOnion;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			YellowOnion.iQty = YellowOnion.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 2241)
 	{
 		y = SweetOnion;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			SweetOnion.iQty = SweetOnion.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 2250)
 	{
 		y = Garlic;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			Garlic.iQty = Garlic.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
 	else if(x == 3110)
 	{
 		y = Apples;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			Apples.iQty = Apples.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
 
	 else if(x == 3120)
 	{
 		y = Banana;
 		if(t == "lb" && !isNaN(q) && (q >=0))
 		{
 			Banana.iQty = Banana.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
 		}
 	}
	 
 	else if(x == 3130)
 	{
 		y = Grapes;
 		if(t == "lb" && !isNaN(q) && (q >=0) )
 		{
 			Grapes.iQty = Grapes.iQty + q;
 		}
 		else
 		{
 			invalid = 1;
		}
 	}
 
 	else
 	{
 		invalid = 1;
 	}
 
 	
 	if( invalid == 0 )
 		displaytxt =  y.iNumber + " ** " + y.iType + " **" + q + " " + y.iUnit +
 					"<br>" + displaytxt;
 
	 else
	 	invalid = 1;
	 
	 if(invalid == 1)
	 {
	 	displaytxt = "Invalid Input"+ "<br>" + displaytxt;
	 } 	
	 document.getElementById("disp1").innerHTML = displaytxt;
 
	modesell = 0;
 	modequery = 0;
 	modestock = 1;
}

function sell()
{
	invalid = 0;
 	oos = 0; //flag for item OUT OF STOCK!  
	if(modesell == 0)
	{
		displaytxt = "";
		mode = "Sold***";
		document.getElementById("disp2").innerHTML = mode;
	}
	
	var x1 = document.getElementById("barcode1").value;
	var q2 = document.getElementById("quant1").value;
	var y1; 
	q2 = parseInt(q2);
	var txtadd = "";
	
	if(x1 == 9801)
 	{	
 	 	y1 = eggs;
 	    
  		if(!isNaN(q2) && (q2 >= 0))
 	    {		
 	    	if((y1.iQty - q2) < 0)
 	 		
 	         	oos = 1;
 	        	
 	         
 			else
 			 	eggs.iQty = eggs.iQty - q2;	
 		}
 	    
 	    else
 	 		invalid = 1;
 	}
 
    else if(x1 == 9802)
 	{
 		y1 = eggs2;
 	
	 	if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 		{
 				oos = 1;
 			}
 				
 			else
 	 			eggs2.iQty = eggs2.iQty - q2;
 		}	
 		else
 	 		invalid = 1;
	}
 
	else if(x1 == 98018)
    {
 		y1 = eggs3;
 		
	 	if(!isNaN(q2) && (q2 >= 0))
	 	{
 			if((y1.iQty - q2) < 0)
 		 	{
				oos = 1;
			}
					
	 		else
 				eggs3.iQty = eggs3.iQty - q2;
 		}
 	
 		else
 		 	invalid = 1;
 	}
 
 	else if(x1 == 4301)
	{	 
 		y1 = milk;
 	
 		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 		{
 				oos = 1;
 			}
 			else
 				milk.iQty = milk.iQty - q2;
 		}
 		else
 	 		invalid = 1;
 	}
    
 	else if(x1 == 4302)
 	{
 		y1 = milk2;
	
		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 		{
 				oos = 1;
 		    }
 			
 			else
 				milk2.iQty = milk2.iQty - q2; 
 		}
 		else
 	 		invalid = 1;
 	}
    
	else if(x1 == 2210)
	{
		y1 = eggplant;
	 	if(!isNaN(q2) && (q2 >= 0))
	 	{
 			if((y1.iQty - q2) < 0)
 	 		{
 				oos = 1;
 			}
 			
 			else	
 				eggplant.iQty = eggplant.iQty - q2;
 		}
 		
 		else
 	 		invalid = 1;
 	}
    
    else if(x1 == 2220)
	{
 		y1 = RomaTomato;
 		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 		
 				oos = 1;
 			
 			else
 				RomaTomato.iQty = RomaTomato.iQty - q2;
		} 
 	
 		else
 	 		invalid = 1;
 	}
 
 	else if(x1 == 2221)
 	{
 		y1 = TomatoWshrub;
 		if(!isNaN(q2) && (q2 >= 0))
		{
			if((y1.iQty - q2) < 0)
 	 		{
 				oos = 1;
 			}
 			else
				TomatoWshrub.iQty = TomatoWShrub.iQty - q2;
		}
		else
 	 		invalid = 1;
 	}
 
	else if(x1 == 2240)
 	{
 		y1 = YellowOnion;
 	
 		if(!isNaN(q2) && (q2 >= 0))
 		{
			if((y1.iQty - q2) < 0)
 	 		{		
 				oos = 1;
 			}
 			else 		
 				YellowOnion.iQty = YellowOnion.iQty - q2;
 		}
 		else
 	 		invalid = 1;
 	}
    
	else if(x1 == 2241)
	{
 		y1 = SweetOnion;
 	
 		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 			oos = 1;
 	
 			else
 				SweetOnion.iQty = SweetOnion.iQty - q2;
 		}
 		else
 	 		invalid = 1;
 	
 	 }
 
	 else if(x1 == 2250)
	 {
 		y1 = Garlic;
 	
 		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
				oos = 1;
				 	
 			else
 				Garlic.iQty = Garlic.iQty - q2;
 		}
 		else
 			invalid = 1;
	 }
 
	 else if(x1 == 3110)
	 {
 	 	y1 = Apples;
 	 
 	 	if(!isNaN(q2)  && (q2 >= 0))
 	 	{
 	 		if((y1.iQty - q2) < 0)
 	 			oos = 1;
 	 
 	 		else
 	 			Apples.iQty = Apples.iQty - q2;
 	 	}
 	 	else
 	 	 	invalid = 1;	
 	 }
     
	 else if(x1 == 3120)
 	 {
 	 	y1 = Banana;
 	
 		if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 			oos = 1;
 		
 			else
 				Banana.iQty = Banana.iQty - q2;
 		}
 		else
 	 		invalid = 1;	
 	 }
 
	 else if(x1 == 3130)
	 {
	 	y1 = Grapes;
 	
	 	if(!isNaN(q2) && (q2 >= 0))
 		{
 			if((y1.iQty - q2) < 0)
 	 			oos = 1;
 	 			
			else
 				Grapes.iQty = Grapes.iQty - q2;
 		}
 		else
 	 		invalid = 1;
 	 }
 
 	else
 	{
 		invalid = 1;

 	}	
	
	if((invalid == 0) && (oos == 0))
	{
		displaytxt = y1.iNumber + " ** " + y1.iType + " **" + q2 + " " + y1.iUnit +
 		"<br>" + displaytxt ;
	} 
	else if ( invalid == 1)
		displaytxt = "Invalid Input " + "<br>" + displaytxt;
	else 
		displaytxt = "Out Of Stock" + "<br>" + displaytxt;
	
	document.getElementById("disp1").innerHTML = displaytxt;
 
 modesell = 1;
 modequery = 0;
 modestock = 0;

}

function query()
{
	if(modequery == 0)
	{
		displaytxt = "";
		mode = "In Stock***";
		document.getElementById("disp2").innerHTML = mode;
	}
	
	var x2 = document.getElementById("barcode3").value;
	var y2;
	
	if(x2 == 9801)
 	 	y2 = eggs;
  	
  	else if(x2 == 9802)
 		y2 = eggs2;

	else if(x2 == 98018)
		y2 = eggs3;
 	
 	else if(x2 == 4301)
 		y2 = milk;
 	
 	else if(x2 == 4302)
 		y2 = milk2;
	
    else if(x2 == 2210)
	 	y2 = eggplant;
 
 	else if(x2 == 2220)
 		y2 = RomaTomato;
 	
    else if(x2 == 2221)
 	 	y2 = TomatoWshrub;
 	
	else if(x2 == 2240)
 		y2 = YellowOnion;
 	
 	else if(x2 == 2241)
	 	y2 = SweetOnion;
 	
 	else if(x2 == 2250)
 		y2 = Garlic;
 	
    else if(x2 == 3110)
 		y2 = Apples;
 	
 	else if(x2 == 3120)
 		y2 = Banana;
 
 	else if(x2 == 3130)
 		y2 = Grapes;
 	
 	else
 	{
 		 document.getElementById("disp2").innerHTML = mode;
	 	// document.getElementById("demo10").innerHTML = "Please enter a valid Barcode";
	 	 displaytxt = "Please enter a valid Barcode" + "<br>" + displaytxt;
	 	  document.getElementById("disp1").innerHTML = displaytxt;

	}
// document.getElementById("demo11").innerHTML = "Stock available for " +
 //					y2.iType + " : " + y2.iQty;
 
 displaytxt =  y2.iNumber + " ** " + y2.iType + " **"+ " " + y2.iQty + y2.iUnit +
 				"<br>" + displaytxt ;
 document.getElementById("disp1").innerHTML = displaytxt;
 
 modesell = 0;
 modequery = 1;
 modestock = 0;

}
	
	
	

testtext1 = "YO maaa!!";
//document.getElementById("disp1").innerHTML = displaytxt;

