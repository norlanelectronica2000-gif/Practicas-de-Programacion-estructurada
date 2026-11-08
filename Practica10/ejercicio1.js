function CalculoVentas(ventas){
    let total = 0;
    let mayoresA50 =0;
    let ventasNu = ventas.lenght;

    ventas.forEach(ventas=>{
        total += ventas;
        if(ventas>50){
            mayoresA50++
        }
    });

    let promedio = total/ventasNu;

    let ventasDia = {
        descripcion: 'Informacion de las ventas.',
        promedio: promedio,
        total: total,
        ventas_mayores_A_50: mayoresA50
    }

    console.log(ventasDia)
}

let ventas =[10, 20, 40, 56, 20];
CalculoVentas(ventas);