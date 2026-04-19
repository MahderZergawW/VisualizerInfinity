define({ 

 //Type your controller code here 
  /****************************************************************
 *	Name    : resetWidgetPositions
 *	Author  : Kony 
 *	Purpose : To reset the positions of widgets before revisting into same flexForm.
 ******************************************************************/
 resetWidgetPositions:function() {
    if (kony.os.deviceInfo().name == "android") this.view.lblFlexLine.text = "Line";
    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8") {
        this.view.lblFlexLine.text = "Line";
        this.view.imgFlex.left = -112;
        this.view.imgFlex.top = 76;
        this.view.lblFlexFName.left = 500;
        this.view.lblFlexFName.top = 76;
        this.view.lblFlexLName.left = 500;
        this.view.lblFlexLName.top = 112;
        this.view.lblFlexCompany.left = 500;
        this.view.lblFlexCompany.top = 148;
        this.view.lblFlexPhoneHome.top = -30;
        this.view.lblFlexPhoneWork.top = -30;
        this.view.lblFlexLine.left = -500;
        this.view.lblFlexLine.top = 280;
        this.view.lblFlexEmail.top = 1000;
        this.view.lblFlexHomePage.top = 1000;
        this.view.lblFlexAdress.top = 1000;
        this.view.lblFlexStreet.top = 1000;
        this.view.lblFlexArea.top = 1000;
        this.view.lblFlexCity.top = 1000;
    } else {
        this.view.imgFlex.left = -112;
        this.view.imgFlex.top = 44;
        this.view.lblFlexFName.left = 500;
        this.view.lblFlexFName.top = 44;
        this.view.lblFlexLName.left = 500;
        this.view.lblFlexLName.top = 70;
        this.view.lblFlexCompany.left = 500;
        this.view.lblFlexCompany.top = 116;
        this.view.lblFlexPhoneHome.top = -30;
        this.view.lblFlexPhoneWork.top = -30;
        this.view.lblFlexLine.left = -500;
        this.view.lblFlexLine.top = 248;
        this.view.lblFlexEmail.top = 1000;
        this.view.lblFlexHomePage.top = 1000;
        this.view.lblFlexAdress.top = 1000;
        this.view.lblFlexStreet.top = 1000;
        this.view.lblFlexArea.top = 1000;
        this.view.lblFlexCity.top = 1000;
    }
},
/****************************************************************
 *	Name    : animationConfig
 *	Author  : Kony 
 *	Purpose : To Configure Animation duration, iterationCount, delay and fillMode.
 ******************************************************************/
 animationConfig:function() {
    var config = {
        "duration": 2.0,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    return config;
},
/****************************************************************
 *	Name    : animationObj
 *	Author  : Kony 
 *	Purpose : To Animate widgets inside flex layout using createAnimation API .
 ******************************************************************/
 animationObj:function(top, left) {
    var moveObject = {
        100: {
            "left": left,
            "top": top
        }
    }
    var animationObject = kony.ui.createAnimation(moveObject);
    return animationObject;
},
/****************************************************************
 *	Name    : animateBottomPart
 *	Author  : Kony 
 *	Purpose : To Animate widgets located at bottom Part inside flex layout using animate API.
 ******************************************************************/
 animateBottomPart:function() {
    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8") {
        this.view.lblFlexEmail.animate(this.animationObj(300, 12), this.animationConfig(), {});
        this.view.lblFlexHomePage.animate(this.animationObj(340, 12), this.animationConfig(), {});
        this.view.lblFlexAdress.animate(this.animationObj(380, 12), this.animationConfig(), {});
        this.view.lblFlexStreet.animate(this.animationObj(420, 12), this.animationConfig(), {});
        this.view.lblFlexArea.animate(this.animationObj(460, 12), this.animationConfig(), {});
        this.view.lblFlexCity.animate(this.animationObj(500, 12), this.animationConfig(), {});
    } else {
        this.view.lblFlexEmail.animate(this.animationObj(268, 12), this.animationConfig(), {});
        this.view.lblFlexHomePage.animate(this.animationObj(308, 12), this.animationConfig(), {});
        this.view.lblFlexAdress.animate(this.animationObj(348, 12), this.animationConfig(), {});
        this.view.lblFlexStreet.animate(this.animationObj(388, 12), this.animationConfig(), {});
        this.view.lblFlexArea.animate(this.animationObj(428, 12), this.animationConfig(), {});
        this.view.lblFlexCity.animate(this.animationObj(468, 12), this.animationConfig(), {});
    }
},
/****************************************************************
 *	Name    : animateLine
 *	Author  : Kony 
 *	Purpose : To Animate line inside flex layout using animate API.
 ******************************************************************/
 animateLine:function() {
    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8") {
        this.view.lblFlexLine.animate(this.animationObj(280, 0), this.animationConfig(), {
            "animationEnd": this.animateBottomPart
        });
    } else {
        this.view.lblFlexLine.animate(this.animationObj(248, 0), this.animationConfig(), {
            "animationEnd": this.animateBottomPart
        });
    }
},
/****************************************************************
 *	Name    : animatePhoneNumbers
 *	Author  : Kony 
 *	Purpose :To Animate PhoneNumber Label inside flex layout using animate API.
 ******************************************************************/
 animatePhoneNumbers:function() {
    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8") {
        this.view.lblFlexPhoneHome.animate(this.animationObj(200, 12), this.animationConfig(), {});
        this.view.lblFlexPhoneWork.animate(this.animationObj(240, 12), this.animationConfig(), {
            "animationEnd": this.animateLine
        });
    } else {
        this.view.lblFlexPhoneHome.animate(this.animationObj(168, 12), this.animationConfig(), {});
        this.view.lblFlexPhoneWork.animate(this.animationObj(208, 12), this.animationConfig(), {
            "animationEnd": this.animateLine
        });
    }
},
/****************************************************************
 *	Name    : animateFlex
 *	Author  : Kony 
 *	Purpose : To Animating widgets inside flex layout using animate and createAnimation APIs.
 ******************************************************************/
 animateFlex:function() {
    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "Windows8") {
        this.view.imgFlex.animate(this.animationObj((76, 12), this.animationConfig(), {}));
        this.view.lblFlexFName.animate(this.animationObj(76, 130), this.animationConfig(), {});
        this.view.lblFlexLName.animate(this.animationObj(112, 130), this.animationConfig(), {});
        this.view.lblFlexCompany.animate(this.animationObj(148, 130), this.animationConfig(), {
            "animationEnd": this.animatePhoneNumbers()
        });
    } else {
        this.view.imgFlex.animate(this.animationObj(70, 12), this.animationConfig(), {});
        this.view.lblFlexFName.animate(this.animationObj(70, 130), this.animationConfig(), {});
        this.view.lblFlexLName.animate(this.animationObj(90, 130), this.animationConfig(), {});
        this.view.lblFlexCompany.animate(this.animationObj(116, 130), this.animationConfig(), {
            "animationEnd": this.animatePhoneNumbers()
        });
    }
}


 });