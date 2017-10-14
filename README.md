# Droidscript-Custom-Spinner
A custom drop-down list control for Droidscript 

# How To Use

*//Load the file spinner.js*

app.LoadScript("spinner.js");

*//create a custom spinner*

spinner = new Spinner(list, title, width, height, options);

*//Set a function to be called when a drop-down item is touched

spinner.onTouch = function()
{
  app.ShowPopup(this.GetText());
}

*//add the custom spinner to a layout*

lay.AddChild(spinner);
