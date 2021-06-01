AFRAME.registerSystem('colorlistener', {
    schema: {},

    init() {
        this.onColorChanged = this.onColorChanged.bind(this);

        // luisteren of iemand 'schreeuw' dat hij zijn kleur heeft aangepast
        this.el.addEventListener("colorChanged", this.onColorChanged);
    },

    onColorChanged(settings){
        // ik laat hier zien wat er mee is gestuurd bij het 'schreeuwen'
        console.log(settings.detail);
    }

});
