var Field = function(){
  this.init = function(){
    var stage = new Kinetic.Stage({
      container: 'my_ships',
      width: 500,
      height: 500
    });

    var layer = new Kinetic.Layer();

    var txt = new Kinetic.Text({
      width: 50,
      height: 50,
      align: 'center',
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black'
    });

    var rect = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: 400,
      height: 400,
      fill: 'yellow',
      offset: {
        x: -50,
        y: -50
      },
      strokeWidth: 1,
      stroke: 'black'
    });

    _.each([1, 2, 3, 4, 5, 6, 7, 8, 9],
      function(num){
        txt.setY(0);
        txt.setX(50 + 40 * (num - 1));
        txt.setText(num);
        layer.add(txt);
    });
    layer.add(rect);
    stage.add(layer);

    that = this;
    _.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(i){
      _.each(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], function(j){
        that.cells[i + j] = new Cell();
      });
    });
  };

  this.cells = {}

  this.init();
};
