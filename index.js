let cta = {
    arreglo: [],

    distribuir: function (num,total){
        this.arreglo = [];

        num = parseInt(num);
        total = parseFloat(total);
        if (num <= 0 || total <= 0) {
            return [];
        }
        if (num == 1) {
            this.arreglo.push({valor:total});

            return this.arreglo;
        }
        let a = parseFloat(total/num).toFixed(2);

        let num_2 = parseInt(num-1);

        let x_0 = parseFloat(a*num_2).toFixed(2);

        let c_f = parseFloat(parseFloat(total).toFixed(2)  - parseFloat(x_0).toFixed(2)).toFixed(2);

        for (let i = 0; i < num - 1; i++) {
            this.arreglo.push({valor:a});
        }

        this.arreglo.push({valor:c_f});

        return this.arreglo;
    },

    modificar: function (val,index) {
        index = parseInt(index);
        val = parseFloat(val);
        
        if (index < 0 || index + 1 >= this.arreglo.length || val < 0) {
            return false;
        }

        let actual = parseFloat(this.arreglo[index].valor).toFixed(2);

        let sumaFaltante = 0;

        for (let i = index; i < this.arreglo.length; i++) {
            sumaFaltante += parseFloat(this.arreglo[i].valor);
        }

        sumaFaltante = parseFloat(sumaFaltante).toFixed(2);

        if (sumaFaltante <= 0 || val - actual > sumaFaltante) {
            return false;
        }

        this.arreglo[index].valor = val;

        let sumaRestante = parseFloat(sumaFaltante - val).toFixed(2);

        let num = parseInt(this.arreglo.length - index - 1);

        let a = parseFloat(sumaRestante/num).toFixed(2);

        let num_2 = parseInt(num-1);

        let x_0 = parseFloat(a*num_2).toFixed(2);

        let c_f = parseFloat(parseFloat(sumaRestante).toFixed(2)  - parseFloat(x_0).toFixed(2)).toFixed(2);
        
        for (let i = index + 1; i < this.arreglo.length - 1; i++) {
            this.arreglo[i].valor = a;
        }

        this.arreglo[this.arreglo.length - 1].valor = c_f;

        return true;
    }
}

export default cta;