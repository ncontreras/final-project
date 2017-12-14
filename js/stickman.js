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

function torso(){
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

    
    canvas.add(line);
    canvas.add(line2);
    

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
    );
};

function limb1(){
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

    
    canvas.add(line);
    canvas.add(line2);
    canvas.add(line3);

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
        makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
    );
};

function limb2(){
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

    
    canvas.add(line);
    canvas.add(line2);
    canvas.add(line3);
    canvas.add(line4);

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
        makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
        makeCircle(line3.get('x2'), line3.get('y2'), line3),
        makeCircle(line4.get('x2'), line4.get('y2'), line4),
    );
};

function limb3(){
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

    
    canvas.add(line);
    canvas.add(line2);
    canvas.add(line3);
    canvas.add(line4);
    canvas.add(line5);

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
        makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
        makeCircle(line3.get('x2'), line3.get('y2'), line3),
        makeCircle(line4.get('x2'), line4.get('y2'), line4),
        makeCircle(line5.get('x2'), line5.get('y2'), line5),
    );
};

function limb4(){
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

    
    canvas.add(line);
    canvas.add(line2);
    canvas.add(line3);
    canvas.add(line4);
    canvas.add(line5);
    canvas.add(line6);

    canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line), //head
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
        makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
        makeCircle(line3.get('x2'), line3.get('y2'), line3),
        makeCircle(line4.get('x2'), line4.get('y2'), line4),
        makeCircle(line5.get('x2'), line5.get('y2'), line5),
        makeCircle(line6.get('x2'), line6.get('y2'), line6)
    );
};

function empty_canvas(){
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

};

head();
torso();
limb1();
limb2();
limb3();
limb4();
empty_canvas();

