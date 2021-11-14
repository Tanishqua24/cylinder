var cylinder = {
    radius: 5,
    height: 6,
    //volume of cylinder
    volume: function() {
        return Math.PI * this.radius * this.radius * this.height;
    },
    //surface area of cylinder
    surface: function() {
        return 2 * Math.PI * this.radius * this.height;
    },
};
document.getElementById("VolumeOfCylinder").innerHTML = cylinder.volume();
document.getElementById("SurfaceAreaOfCylinder").innerHTML = cylinder.surface();