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
	  child.left = child.GetLeft() - 0.01;
	  child.top  = child.GetTop();
	  child.txt  = child.GetText();
	  
	  if (self.collapsed )
	  {
	    self.lay = app.CreateLayout( "absolute", "TouchThrough" );
	    self.lay.SetPosition(1,1,1,1);
	    self.lay.SetPadding( 0,0.035,0,0 );
	    self.lay.SetOnTouchDown( function()
	    {
	      app.RemoveLayout( this );
	    });
	    
	    self.scrollLay = app.CreateLayout( "absolute", "TouchThrough" );
	    self.scrollLay.SetPosition( child.left, child.top, -1, -1);
	    self.lay.AddChild( self.scrollLay );
	    
	    self.scroll = app.CreateScroller(-1,-1);
	    self.scroll.SetPosition( child.left, child.top, -1,-1);
	    self.scroll.SetBackColor( "#05000000" );
	    self.scroll.SetPadding( 0.005, 0, 0.005, 0.005);
	    self.lay.AddChild( self.scroll );
	    
	    self.tray  = app.CreateLayout( "Linear", "TouchThrough" );
	    self.tray.SetBackColor( "#000000" );
	    self.scroll.AddChild(self.tray );
	    
	    self.list.forEach( function(item)
	    {
	      self.item = app.CreateText(item,self.width,self.height,self.options+"FillX");
	      self.item.SetOnTouch( self.titleTxt.onTouch);
	      self.item.SetPadding( 0.01,0.01,0.01,0.01 );
	      self.item.SetMargins( 0, 0, 0, 0.002);
	      self.item.SetBackColor( "#ffffff" );
	      self.item.SetTextSize( 15);
	      self.tray.AddChild( self.item );
	    });
	    
	    app.AddLayout( self.lay );
	    self.collapsed = false;
	  }
	  else
	  {
	    self.collapsed  = true;
	    app.RemoveLayout( self.lay );
	  }
	}
	
	self.titleTxt = app.CreateText( title,self.width,self.height,self.options );
	self.titleTxt.SetTextSize( 15);
	self.titleTxt.onTouch = null;
	self.titleTxt.SetPadding( 0.01,0.01,0.01,0.01 );
	self.titleTxt.SetBackColor( "#ffffff" );
  self.titleTxt.SetOnTouchDown( self.toggle);
  return self.titleTxt;
}
