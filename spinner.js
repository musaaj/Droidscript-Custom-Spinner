function Spinner(list,title,width,height,options)
{
	this.list = list;
	this.title  = title;
	this.width = width;
	this.height = height;
	this.options  = options;
	
	this.toggle = function ()
  {
    this.left = this.GetLeft(  );
    this.top = this.GetTop(  );
    
     if (this.collapsed )
	  {
	    this.lay = app.CreateLayout( "absolute", "TouchThrough" );
	    this.lay.SetPosition(1,1,1,1);
	    this.lay.SetPadding( 0,0.025,0,0 );
	    this.lay.SetOnTouchDown( function()
	    {
	      app.DestroyLayout( this );
	    });
	    
	    this.scrollLay = app.CreateLayout( "absolute", "TouchThrough" );
	    this.scrollLay.SetPosition( this.left, this.top, -1, -1);
	    this.scrollLay.SetPadding( 0.01, 0.01, 0.01, 0.01 );
	    this.lay.AddChild( this.scrollLay );
	    
	    this.scroll = app.CreateScroller(-1,-1);
	    this.scroll.SetBackColor( "#05000000" );
	    this.scroll.SetPadding( 0.005, 0, 0.005, 0.005);
	    this.scrollLay.AddChild( this.scroll );
	    
	    this.tray  = app.CreateLayout( "Linear", "TouchThrough" );
	    this.tray.SetBackColor( "#000000" );
	    this.scroll.AddChild(this.tray );
	    
	    for ( i in this.list)
	    {
	      this.item = app.CreateText(this.list[i],this.width,this.height,this.options+"FillX");
	      this.item.SetOnTouch( this.onTouch);
	      this.item.SetPadding( 0.01,0.01,0.01,0.01 );
	      this.item.SetMargins( 0, 0, 0, 0.002);
	      this.tray.AddChild( this.item );
	    }
	    
	    app.AddLayout( this.lay );
	    this.collapsed = false;
	  }
	  else
	  {
	    this.collapsed  = true;
	    app.DestroyLayout( this.lay );
	  }
  }

	
	this.titleTxt = app.CreateText( this.title,this.width,this.height,this.options);
	this.titleTxt.list = this.list;
	this.titleTxt.title = this.title;
	this.titleTxt.width = this.width;
	this.titleTxt.height = this.height;
	this.titleTxt.options = this.options;
	this.titleTxt.collapsed = true;
	this.titleTxt.onTouch  = null;
	this.titleTxt.SetOnTouchDown( this.toggle);
	return this.titleTxt;
}
