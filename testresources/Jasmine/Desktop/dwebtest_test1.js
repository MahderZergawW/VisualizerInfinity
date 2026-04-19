describe("dwebtest", function() {
    it("test1/NavigationTest", async function() {
	kony.automation.button.click(["Form1","btnClickme"]);
	await kony.automation.playback.wait(5000);
	kony.automation.textbox.enterText(["Form2","txtUsername"],"test");
	kony.automation.textbox.enterText(["Form2","txtPassword"],"test");
    await kony.automation.playback.wait(3000);
	kony.automation.button.click(["Form2","btnLogin"]);
	await kony.automation.playback.wait(5000);
	kony.automation.checkboxgroup.click(["Form3","chkBox"], "cbg3");
	kony.automation.checkboxgroup.click(["Form3","chkBox"], "cbg1");
    });
  
    it("test1/testcase", async function() {
	kony.automation.textbox.enterText(["Form2","txtUsername"],"cdf");
	kony.automation.textbox.enterText(["Form2","txtPassword"],"sdced");
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["Form2","btnLogin"]);
	await kony.automation.playback.wait(1000);
	kony.automation.capture();
	kony.automation.checkboxgroup.click(["Form3","chkBox"], "cbg3");
	expect("cbg3").toEqual(kony.automation.widget.getWidgetProperty(["Form3","chkBox"], "selectedkeys"));
    });
});