AFRAME.registerComponent('changecolor', {
    schema: {
        color: {type: 'string', default: 'white'}
    },

    init() {
        this.onClick = this.onClick.bind(this);

        this.el.addEventListener("click", this.onClick);

        // dit hoort hier niet thuis... maar als voorbeeld maak ik een sphere aan
        this.createSphere();

    },

    onClick(){
        this.el.setAttribute("color", this.data.color);
        this.el.emit('colorChanged', this.data, true);
    },

    createSphere(){
        const newSphere = document.createElement("a-sphere");
        newSphere.setAttribute("radius", 0.5);
        newSphere.setAttribute("position", "0 2 -2");
        this.el.sceneEl.appendChild(newSphere);
    }



});
