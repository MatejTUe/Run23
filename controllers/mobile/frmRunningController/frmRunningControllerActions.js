define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ebfcb93d26c54d48bf13f6160f4eae34: function AS_Button_ebfcb93d26c54d48bf13f6160f4eae34(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    AS_Form_c46f4fb558f64f478f26f589b73660ae: function AS_Form_c46f4fb558f64f478f26f589b73660ae(eventobject) {
        var self = this;
        kony.location.watchPosition(successcallback1, positionoptions);
        // kony.timer.schedule("myTimer", measureSpeed, 1, true);
        this.view.currentSpeed.text = speed;
    },
    AS_Label_ce1766f75c78437386569b8d7abbc318: function AS_Label_ce1766f75c78437386569b8d7abbc318(eventobject, x, y) {
        var self = this;
        this.view.currentSpeed.text = speed;
    }
});