const products = [
    {
        id: '01',
        name: 'taza oso',
        description: 'Taza de cerámica con forma de Oso, diseñada y pintada a mano',
        category: 'cocina',
        stock: 20,
        price: 1200,
        img: [
            '/public/tazaOso1.jpg'
        ]
    },
    {
        id: '02',
        name: 'bowl ancla',
        description: 'Bowl de cerámica con diseño de ancla',
        category: 'cocina',
        stock: 10,
        price: 1200,
        img: [
            '/public/bowlAncla1.jpg',
            '/public/bowlAncla2.jpg'
        ]
    },
    {
        id: '03',
        name: 'taza aventura',
        description: 'Taza de cerámica de color blanco con estampa y borde en color negro.',
        category: 'cocina',
        stock: 20,
        price: 1200,
        img: [
            '/public/tazaAventura1.jpg',
            '/public/tazaAventura2.jpg'
        ]
    },
    {
        id: '04',
        name: 'cuchillo untar love',
        description: 'Cuchillo de untar (2 unidades). No lavar en lavavajilla, ni limpiar con limpia metales o cif. Solo virulana seca',
        category: 'cocina',
        stock: 50,
        price: 1200,
        img: [
            '/public/cuchilloLove1.jpg',
            '/public/cuchilloLove2.jpg'
        ]
    },
    {
        id: '05',
        name: 'cuchara love',
        description: 'Cuchara (2 unidades).No lavar en lavavajilla, ni limpiar con limpia metales o cif. Solo virulana seca',
        category: 'cocina',
        stock: 50,
        price: 1200,
        img: [
            '/public/cucharaLove1.jpg',
            '/public/cucharaLove2.jpg'
        ]

    },
    {
        id: '06',
        name: 'bowl dots',
        description: 'Bowl de porcelana de alta durabilidad con diseño en calco y detalle en oro en el borde. No apto para microondas',
        category: 'cocina',
        stock: 20,
        price: 1200,
        img: [
            '/public/bowlDots1.jpg',
            '/public/bowlDots2.jpg'
        ]
    },
    {
        id: '07',
        name: 'bowl felix',
        description: 'Bowl de porcelana blanca con borde pintado en azul',
        category: 'cocina',
        stock: 20,
        price: 1200,
        img: [
            '/public/bowlFelix1.jpg',
            '/public/bowlFelix2.jpg'
        ]
    },
    {
        id: '08',
        name: 'taza felix',
        description: 'Taza de café con plato. Detalle de bordes en azul.',
        category: 'cocina',
        stock: 30,
        price: 1200,
        img: [
            '/public/tazaFelix1.jpg',
            '/public/tazaFelix2.jpg'
        ]
    },
    {
        id: '09',
        name: 'almohadón brana',
        description: 'Almohadón 100% hilo de algodón con estampado a rayas.Incluye relleno de guata siliconada',
        category: 'textiles',
        stock: 20,
        price: 1200,
        img: [
            '/public/almohadonBrana1.jpg',
            '/public/almohadonBrana2.jpg'
        ]
    },
    {
        id: '10',
        name: 'almohadón malva',
        description: 'Almohadón artesanal tejido en telar, cuidadosamente combinado con hilo marrón. Medida: 40cm x 60cm. Composicion: 100% algodon. Incluye relleno de guata siliconada',
        category: 'textiles',
        stock: 20,
        price: 1200,
        img: [
            '/public/almohadonMalva1.jpg',
            '/public/almohadonMalva2.jpg',
            '/public/almohadonMalva3.jpg'
        ]
    },
    {
        id: '11',
        name: 'jarra menta',
        description: 'Jarra de cerámica color verde menta y blanco. \r\nIdeal para agua, jugo o incluso de florero',
        category: 'deco',
        stock: 10,
        price: 1200,
        img: [
            '/public/jarraMenta1.jpg'
        ]
    },
    {
        id: '12',
        name: 'plato anne',
        description: 'Plato de porcelana pintado a mano en color azul, con detalle en oro en el borde. No apto para microondas',
        category: 'cocina',
        stock: 50,
        price: 1200,
        img: [
            '/public/platoAnne1.jpg',
            '/public/platoAnne2.jpg'
        ]
    },
    {
        id: '13',
        name: 'plato dots',
        description: 'Plato de porcelana con diseño en calco y detalle en oro en el borde. No apto para microondas',
        category: 'cocina',
        stock: 60,
        price: 1200,
        img: [
            '/public/platoDots1.jpg',
            '/public/platoDots2.jpg'
        ]
    },
    {
        id: '14',
        name: 'maceta oso',
        description: 'Maceta de cerámica esmaltada, con forma de oso, realizada y pintada de forma artesanal. Puede usarse como maceta o florero.',
        category: 'deco',
        stock: 10,
        price: 1200,
        img: [
            '/public/macetaOso1.jpg',
            '/public/macetaOso2.jpg'
        ]
    },
    {
        id: '15',
        name: 'maceta conejo',
        description: 'Maceta de cerámica esmaltada, con forma de conejo, realizada y pintada de forma artesanal. Puede usarse como maceta o florero',
        category: 'deco',
        stock: 10,
        price: 1200,
        img: [
            '/public/macetaConejo1.jpg',
            '/public/macetaConejo2.jpg'
        ]
    },
    {
        id: '16',
        name: 'adorno santorini',
        description: 'Florero de cerámica, realizado en forma artesanal, con tallado de figuras geométricas',
        category: 'deco',
        stock: 8,
        price: 1200,
        img: [
            '/public/adornoSantorini1.jpg'
        ]
    },
    {
        id: '17',
        name: 'bowl santorini',
        description: 'Bowl de cerámica, realizado en forma artesanal, con tallado de figuras geométricas',
        category: 'cocina',
        stock: 10,
        price: 1200,
        img: [
            '/public/bowlSantorini1.jpg'
        ]
    },
    {
        id: '18',
        name: 'repasador mar',
        description: 'Repasador de algodón con estampa. Lavar con agua fría, jabón neutro, no usar cloro',
        category: 'textiles',
        stock: 30,
        price: 1200,
        img: [
            '/public/repasadorMar1.jpg',
            '/public/repasadorMar2.jpg'
        ]
    },
    {
        id: '19',
        name: 'repasador rayas',
        description: 'Repasador de algodón a rayas anchas color azul y celeste. Lavar con agua fría, jabón neutro, no usar cloro',
        category: 'textiles',
        stock: 30,
        price: 1200,
        img: [
            '/public/repasadorRayas1.jpg',
            '/public/repasadorRayas2.jpg'
        ]
    },
    {
        id: '20',
        name: 'manta punto',
        description: 'Manta de hilo 100% algodón, en punto, con dibujo zigzag en relieve',
        category: 'textiles',
        stock: 15,
        price: 1200,
        img: [
            '/public/mantapunto1.jpg',
            '/public/mantapunto2.jpg',
            '/public/mantapunto3.jpg'
        ]
    },
    {
        id: '21',
        name: 'manta mecha',
        description: 'Manta de punto, con hilos 100% algodón en diferentes colores, con flecos en sus bordes',
        category: 'textiles',
        stock: 20,
        price: 1200,
        img: [
            '/public/mantaMecha1.jpg',
            '/public/mantaMecha2.jpg',
            '/public/mantaMecha3.jpg'
        ]
    },
    {
        id: '22',
        name: 'reloj kent',
        description: 'Reloj de pared de metal de inspiración nórdica',
        category: 'deco',
        stock: 10,
        price: 1200,
        img: [
            '/public/relojKent1.jpg'
        ]
    },
    {
        id: '23',
        name: 'marco fotos ondas',
        description: 'Marco de fotos con filo metálico y silueta ondulada. Se puede apoyar en vertical o en horizontal y colgar en la pared con los anclajes de la parte trasera.Para fotos de 10cm x 15cm',
        category: 'deco',
        stock: 40,
        price: 1200,
        img: [
            '/public/marcoOndas1.jpg',
            '/public/marcoOndas2.jpg',
            '/public/marcoOndas3.jpg'
        ]
    },
    {
        id: '24',
        name: 'marco fotos irregular',
        description: 'Marco de fotos metálico de forma irregular con paspartú. Se puede apoyar en vertical o en horizontal y colgar en la pared con los anclajes de la parte trasera. Para fotos de 10cm x 15cm',
        category: 'deco',
        stock: 30,
        price: 1200,
        img: [
            '/public/marcoOval1.jpg',
            '/public/marcoOval2.jpg',
            '/public/marcoOval3.jpg'
        ]
    },
    {
        id: '25',
        name: 'cesta ondas',
        description: 'Cesta cuadrada de fibra, con acabado de ondas. Perfecta para utilizar como almacenaje o como elemento decorativo. Medidas: 24cm x 24cm y 14cm de alto.',
        category: 'deco',
        stock: 30,
        price: 1200,
        img: [
            '/public/cestaOndas1.jpg',
            '/public/cestaOndas2.jpg',
            '/public/cestaOndas3.jpg',
        ]
    },
    /*  {
        id: '',
        name: 'nombre',
        description: '',
        category: 'deco',
        stock: 20,
        price: 1200,
         img: [ 
            '/public/marcoOval1.jpg'
        ] 
    }, */
]

//Promesa: esto va a devolver el array de productos
export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        if (error) {
            //existe el error, entonces rechazamos
            reject('Hubo un error, intentalo más tarde')
        } else {
            resolve(products)
        }
        setTimeout(() => { }, 2000)
    })
}

// Acá se obtiene un solo producto por id
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let product = products.find((prod) => prod.id === id); //Busca en el array products el primer elemento cuya propiedad id sea estrictamente igual al id pasado.
            resolve(product); // Si el producto existe se resuelve la promesa y se devuelve el objeto en 2seg
        }, 2000);
    });
};