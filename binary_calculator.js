var sum =  ""
var suk = ""
var check = ""
var x = 1
var y = 0
function OnStart()
{


	layTitle = app.CreateLayout('linear','VCenter,FillXY'  );
	layTitle.SetOnTouch( layTitle_OnTouch );

	layTitle.SetBackground( 'Img/uD9js.png');

	app.AddLayout( layTitle );

	txtTitle = app.CreateText( 'Binary Calculator' );
	txtTitle.SetTextSize( 40 );
	txtTitle.SetTextColor( "white" );

		imgTitle2 = app.CreateImage( null, 1,0.01 );

	layTitle.AddChild( imgTitle2);

	layTitle.AddChild( txtTitle );

	imgTitle = app.CreateImage( null, 1,0.01 );

  DrawPicture()
	layTitle.AddChild( imgTitle );

  app.SetOrientation("Portrait");

  lay = app.CreateLayout("Linear", "Vertical, FillXY");
  lay.SetBackground("Img/uD9js.png")
  app.AddLayout( lay );
  lay.SetVisibility( "Hide" );
  layMenu = app.CreateLayout( "Linear", "Horizonta,FillXYl" );

  layMenu.SetBackColor( "grey" );
	layMenu.SetVisibility( "Hide" );
  imgMenu = app.CreateImage( "Img/56763.png",0.5  );
  imgMenu.SetScale( 0.2,0.2 );
  imgMenu.SetMargins(-0.445,-0.1)
  imgMenu.SetOnTouch( imgMenu_OnTouch );
  lay.AddChild( imgMenu );
  lay1 = app.CreateLayout("Linear", "Horizontal, FillX");

  lay.AddChild(lay1);

  lay2 = app.CreateLayout("Linear", "Horizontal, FillX");

  lay.AddChild(lay2);

  lay3 = app.CreateLayout("Linear", "Horizontal, FillX");

  lay.AddChild(lay3);
  lay3.SetMargins( 0, 0.1, 0, 0.02 );

  lay4 = app.CreateLayout("Linear", "Horizontal, FillX");

  lay.AddChild(lay4);

	txtBin =app.CreateText( sum );
	txtBin.SetMargins( 0, 0.1, 0.01, 0.01 );

	txtBin.SetTextColor( "white" );
	txtBin.SetTextSize( 30 );
	txtNum =app.CreateText(suk);
	txtNum.SetMargins( 0, 0.1, 0.01, 0.01 );
	txtNum.SetTextColor( "white" );
	txtNum.SetTextSize( 30 );

	lay1.AddChild(txtBin  );
	lay2.AddChild( txtNum );

	btn0 = app.CreateButton( "0", 0.8, -1, "Custom" );
  btn0.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btn0.SetTextColor( "black" );
  lay3.AddChild( btn0 );
  btn0.SetOnTouch( btn0_OnTouch );

	btn1 = app.CreateButton( "1", 0.8, -1, "Custom" );
  btn1.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btn1.SetTextColor( "black" );
  lay3.AddChild( btn1);
  btn1.SetOnTouch( btn1_OnTouch );

	btnClc = app.CreateButton( "=", 0.8, -1, "Custom" );
  btnClc.SetStyle( "green", "#4285F4", 90000,"black", 0.7 , 0 );
  btnClc.SetTextColor( "black" );
  lay4.AddChild( btnClc);
  btnClc.SetOnTouch( btnClc_OnTouch );

  btnC = app.CreateButton( "C", 0.8, -1, "Custom" );
  btnC.SetStyle( "green", "#4285F4", 90000, "black", 0.7, 0 );
  btnC.SetTextColor( "black" );
  btnC.SetOnTouch( btnC_OnTouch );
  lay4.AddChild( btnC );


  	app.AddLayout( layMenu );

}
function layTitle_OnTouch()
{
	lay.Animate("SlideFromLeft")

}


function btnC_OnTouch()
{
	sum="";
	txtBin.SetText( sum );

	suk="";
	txtNum.SetText( sum );
	x= 1
    check= ""
}

function btn0_OnTouch()
{
  sum += "0";
  txtBin.SetText(sum);
}

function btn1_OnTouch()
{
  sum += "1";
  txtBin.SetText(sum);

}

function btnClc_OnTouch()
{

    check-=3
    check+=3

    while (x<sum.length+1) {
        check+= ((sum % Math.pow(10,x))-(sum % Math.pow(10,x-1)))/ (Math.pow(10,x-1))* Math.pow(2,x-1)
    x++

    txtNum.SetText(check)}

}


	function DrawPicture()
{
	imgTitle.SetBackColor( "grey" );
		imgTitle2.SetBackColor( "grey" );
}

function imgMenu_OnTouch()
{
	layMenu.Animate( "SlideFromLeft" );
}
