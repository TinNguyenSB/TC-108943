function Test1()
{  
  var startMs = Date.now();
  Log.Message("Time BEFORE checking opening app: " + startMs + " ms");
  //Delay(5000)
  //Runs the "WPF_OpenApp" tested application.
  TestedApps.WPF_OpenApp.Run(1, true);
  var mainWindow = Aliases.WPF_OpenApp
  if (mainWindow.WaitProperty("Exists", true, 30000)) {
        var endMs = Date.now();
        Log.Message("Time AFTER checking opening app " + endMs + " ms");
        var durationMs = endMs - startMs;
        Log.Message("Time Taken to launch the app is: " + durationMs + " milliseconds");        
    } else {
        Log.Error("Application did not start within the timeout.");
  }
  //Clicks the 4 item of the 'ToolBar' bar.
  Aliases.WPF_OpenApp.HwndSource_MainForm.MainForm.ToolBar.ClickItem(4);
  //Selects the 'FamilyAlbum' item of the 'ProductNames' combo box.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.ProductNames.ClickItem("FamilyAlbum");
  //Clicks the 'Quantity' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Quantity.Click(38, 16);
  //Enters '123' in the 'Quantity' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Quantity.Keys("123");
  //Clicks the 'Customer' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Customer.Click(103, 10);
  //Enters the text 'Tin Nguyen' in the 'Customer' text editor.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Customer.SetText("Tin Nguyen");
  //Clicks the 'Street' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Street.Click(40, 3);
  //Enters the text 'Tu Cuong' in the 'Street' text editor.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Street.SetText("Tu Cuong");
  //Clicks the 'State' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.State.Click(60, 16);
  //Clicks the 'City' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.City.Click(107, 8);
  //Enters the text 'HCMC' in the 'City' text editor.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.City.SetText("HCMC");
  //Clicks the 'Zip' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Zip.Click(59, 6);
  //Enters the text '700000' in the 'Zip' text editor.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.Zip.SetText("700000");
  //Clicks the 'AE' radio button.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.AE.ClickButton();
  //Clicks the 'CardNo' object.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.CardNo.Click(64, 12);
  //Enters the text '1234567890' in the 'CardNo' text editor.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.CardNo.SetText("1234567890");
  //Clicks the 'ButtonOK' button.
  Aliases.WPF_OpenApp.HwndSource_OrderForm.OrderForm.ButtonOK.ClickButton();
  //Checks whether the 'WPFControlText' property of the Aliases.WPF_OpenApp.HwndSource_MainForm.MainForm.OrdersView.TextblockTinNguyen object equals 'Tin Nguyen'.
  aqObject.CheckProperty(Aliases.WPF_OpenApp.HwndSource_MainForm.MainForm.OrdersView.TextblockTinNguyen, "WPFControlText", cmpEqual, "Tin Nguyen");
  //Drags the 'HwndSource_MainForm' object.
  Aliases.WPF_OpenApp.HwndSource_MainForm.Drag(576, 7, -7, 0);
  //Clicks the 'btnNo' button.
  Aliases.WPF_OpenApp.dlgConfirmation.btnNo.ClickButton();
}