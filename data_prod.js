const prods = [
    {
        "id":1,
        "name": "Tomate",
        "image": "https://i.postimg.cc/SNX5W45N/images-1.jpg",
        "precio": "$100 x kg",
        "tipo": "Verdura"
    },
    {
        "id":2,
        "name": "Manzana Roja",
        "image": "https://i.postimg.cc/6pqQV8K4/pexels-mali-102104.jpg",
        "precio": "$150 x kg",
        "tipo": "Fruta"
    },
    {
        "id":3,
        "name": "Manzana Verde",
        "image": "https://i.postimg.cc/HL7sKFVp/Manzana-verde-500x500.jpg",
        "precio": "$140 x kg",
        "tipo": "Fruta"
    },
    {
        "id":4,
        "name": "Banana",
        "image": "https://i.postimg.cc/C5whR1J1/fresh-banana-500x500.webp",
        "precio": "$120 x kg",
        "tipo": "Fruta"
    },
    {
        "id":5,
        "name": "Pera",
        "image": "https://i.postimg.cc/6qz9nX1h/248.jpg",
        "precio": "$160 x kg",
        "tipo": "Fruta"
    },
    {
        "id":6,
        "name": "Naranja",
        "image": "https://i.postimg.cc/qv6TMy0w/naranjas-mesa-naturales-500x500.jpg",
        "precio": "$80 x kg",
        "tipo": "Fruta"
    },
    {
        "id":7,
        "name": "Limon",
        "image": "https://i.postimg.cc/fWHncBR5/file.png",
        "precio": "$90 x kg",
        "tipo": "Fruta"
    },
    {
        "id":8,
        "name": "Lima",
        "image": "https://i.postimg.cc/9FS6S0T7/images.jpg",
        "precio": "$200 x kg",
        "tipo": "Fruta"
    },
    {
        "id":9,
        "name": "Zanahoria",
        "image": "https://i.postimg.cc/CKC9z42G/zanahoria1-51c760e9a38852a33116025973686855-640-0.jpg",
        "precio": "$70 x kg",
        "tipo": "Verdura"
    },
    {
        "id":10,
        "name": "Lechuga",
        "image": "https://i.postimg.cc/3RKVpvMP/lechuga-iceberg-web1.png",
        "precio": "$60 x kg",
        "tipo": "Verdura"
    },
    {
        "id":11,
        "name": "Cebolla",
        "image": "https://i.postimg.cc/3Rn6ZxYW/3232fa57a528d5e311760054ffe218bad220d0e5f34b4b657052e57e010e631e116744.png",
        "precio": "$50 x kg",
        "tipo": "Verdura"
    },
    {
        "id":12,
        "name": "Morron Rojo",
        "image": "https://i.postimg.cc/Gtf5ZgBC/file.jpg",
        "precio": "$180 x kg",
        "tipo": "Verdura"
    },
    {
        "id":13,
        "name": "Morron Verde",
        "image": "https://i.postimg.cc/sfHqQxTN/morron-verde1-7cdf50da87489b84ba15909248616989-640-0.jpg",
        "precio": "$170 x kg",
        "tipo": "Verdura"
    },
    {
        "id":14,
        "name": "Morron Amarillo",
        "image": "https://i.postimg.cc/4yY8bvWF/Morron-amarillo.webp",
        "precio": "$190 x kg",
        "tipo": "Verdura"
    },
    {
        "id":15,
        "name": "Papa",
        "image": "https://i.postimg.cc/PxrVNnYH/papa-blanca1-10bbd703c759725bfd16111927110254-640-0.jpg",
        "precio": "$40 x kg",
        "tipo": "Verdura"
    },
    {
        "id":16,
        "name": "Jengibre",
        "image": "https://i.postimg.cc/t4kMbgnk/exotic-fruit-ginger-mc-garlet-1.jpg",
        "precio": "$300 x kg",
        "tipo": "Verdura"
    },
    {
        "id":17,
        "name": "Cebolla Morada",
        "image": "https://i.postimg.cc/4yjW8KM4/CEBOLLA-M.jpg",
        "precio": "$60 x kg",
        "tipo": "Verdura"
    },
    {
        "id":18,
        "name": "Batata",
        "image": "https://i.postimg.cc/wxr4xPvK/D-NQ-NP-764254-MLA72775769054-112023-O.webp",
        "precio": "$55 x kg",
        "tipo": "Verdura"
    },
    {
        "id":19,
        "name": "Durazno",
        "image": "https://i.postimg.cc/2SRHhZh2/Durazno-Amarillo-Organico-500-G.gif",
        "precio": "$180 x kg",
        "tipo": "Fruta"
    },
    {
        "id":20,
        "name": "Ananá",
        "image": "https://i.postimg.cc/g2VgD2Kd/exotic-fruit-pineapple-mc-garlet.jpg",
        "precio": "$250 x kg",
        "tipo": "Fruta"
    },
    {
        "id":21,
        "name": "Frutilla",
        "image": "https://i.postimg.cc/25C2XNHW/images-2.jpg",
        "precio": "$300 x kg",
        "tipo": "Fruta"
    },
    {
        "id":22,
        "name": "Kiwi",
        "image": "https://i.postimg.cc/ht1HGr69/256.jpg",
        "precio": "$350 x kg",
        "tipo": "Fruta"
    },
    {
        "id":23,
        "name": "Pomelo",
        "image": "https://i.postimg.cc/VNs20tP2/images-3.jpg",
        "precio": "$80 x kg",
        "tipo": "Fruta"
    },
    {
        "id":24,
        "name": "Sandía",
        "image": "https://i.postimg.cc/jj8mHjs2/images-4.jpg",
        "precio": "$50 x kg",
        "tipo": "Fruta"
    },
    {
        "id":25,
        "name": "Uva",
        "image": "https://i.postimg.cc/k55hgdxm/pr-91-20230821162814.png",
        "precio": "$400 x kg",
        "tipo": "Fruta"
    }
];