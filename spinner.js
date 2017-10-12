function Spinner(list, title, width, height , options)
{
	self  = this;
	self.list = list;
	self.title  = title;
	self.width = width;
	self.height = height;
	self.options  = options;
	self.collapsed = true;
	
	self.toggle = function()
	{
	  child = this;
	  child.left = child.GetLeft();
	  child.top  = child.GetTop();
	  child.txt  = child.GetText();
	  
	  if (self.collapsed )
	  {
	    self.lay = app.CreateLayout( "absolute", "TouchThrough" );
	    self.lay.SetPosition(1,1,1,1);
	    self.lay.SetPadding( 0,0.02,0,0 );
	    self.lay.SetOnTouchDown( function()
	    {
	      app.RemoveLayout( this );
	    });
	    
	    self.scrollLay = app.CreateLayout( "absolute", "TouchThrough" );
	    self.scrollLay.SetPosition( child.left, child.top, -1, -1);
	    self.lay.AddChild( self.scrollLay );
	    
	    self.scroll = app.CreateScroller();
	    self.scroll.SetPosition( child.left, child.top, -1,-1);
	    self.scroll.SetPadding( 0.01, 0.01, 0.01, 0.01 );
	    self.lay.AddChild( self.scroll );
	    
	    self.tray  = app.CreateLayout( "Linear", "" );
	    self.tray.SetPadding( 0.01, 0.01, 0.01, 0.01 );
	    self.tray.SetBackColor( "#ffffff" );
	    self.scroll.AddChild(self.tray );
	    
	    self.list.forEach( function(item)
	    {
	      self.item = app.CreateText(item,-1,-1,self.options);
	      self.item.SetTextSize( 14 );
	      self.tray.AddChild( self.item );
	    });
	    app.AddLayout( self.lay );
	    self.lay.Animate( "FadeIn",null,500 ); 
	    self.collapsed = false;
	  }
	  else
	  {
	    self.collapsed  = true;
	    app.RemoveLayout( self.lay );
	  }
	}
	
	self.titleTxt = app.CreateText( title,self.width,self.height,self.options );
	self.titleTxt.SetTextSize( 14 );
  self.titleTxt.SetOnTouchDown( self.toggle);
  return self.titleTxt;
}
