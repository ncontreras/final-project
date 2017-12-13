function head(){
    var canvas = this.__canvas = new fabric.Canvas('c', { selection: false });
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

    function makeCircle(left,top ,line1 , line2, line3, line4) {
        var c = new fabric.Circle({
            left: left,
            top: top,
            strokeWidth: 5,
            radius: 12,
            fill: '#fff',
            stroke: '#666'
        });
        c.hasControls = c.hasBorders = false;
        return c;
    }

    function makeLine(coords) {
        return new fabric.Line(coords, {
            fill: 'red',
            stroke: 'red',
            strokeWidth: 5,
            selectable: false
        });
    }

    var line = makeLine([ 250, 125, 250, 175 ]),
        line2 = makeLine([ 250, 175, 250, 250 ]),
        line3 = makeLine([ 250, 250, 300, 350]),
        line4 = makeLine([ 250, 250, 200, 350]),
        line5 = makeLine([ 250, 175, 175, 225 ]),
        line6 = makeLine([ 250, 175, 325, 225 ]);

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
    );
};

