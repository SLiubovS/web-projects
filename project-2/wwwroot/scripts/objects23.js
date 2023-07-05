// реализовать объект triangle (треугольник) из задачи 22 с помощью функции-конструктора

const objects23 = function () {

        function Triangle(name) {
            this.name = name;
            this.read = function() {
                this.a = +prompt('a?', '');
                this.b = +prompt('b?', '');
                this.c = +prompt('c?', '');
            };
            this.p = function() {
                return (+this.a + +this.b + +this.c);
            };
            this.area = function() {
                return ((this.p() * ((this.p() - this.a) * (this.p() - this.b) * (this.p() - this.c))) ** (1/2));
            };
        }

    let triangle = new Triangle('Ann');

    triangle.read();
    alert(triangle.p());
    alert(triangle.area());

        // let tri = new Triangle ('Kate');
        //
        // tri.read();
        // alert(tri.p());
        // alert(tri.area());
};