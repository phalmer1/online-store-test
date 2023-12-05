export const cards = [
    {
        id: 1223,
        title: "Product 1",
        price: 100,
        brand: "Company 1",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 2,
        title: "Product 2",
        price: 200,
        brand: "Company 2",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 3,
        title: "Product 3",
        price: 300,
        brand: "Company 3",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 4,
        title: "Product 4",
        price: 400,
        brand: "Company 1",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 5,
        title: "Product 5",
        price: 500,
        brand: "Company 2",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 6,
        title: "Product 6",
        price: 600,
        brand: "Company 3",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 7,
        title: "Product 7",
        price: 700,
        brand: "Company 1",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 8,
        title: "Product 8",
        price: 800,
        brand: "Company 2",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 9,
        title: "Product 9",
        price: 900,
        brand: "Company 3",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 10,
        title: "Product 10",
        price: 1000,
        brand: "Company 1",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 11,
        title: "Product 11",
        price: 1100,
        brand: "Company 2",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 12,
        title: "Product 12",
        price: 1200,
        brand: "Company 3",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 13,
        title: "Product 13",
        price: 1300,
        brand: "Company 1",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
    {
        id: 14,
        title: "Product 14",
        price: 1400,
        brand: "Company 2",
        imageURL: 'http//:blablabla.ua',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolor. Neque, nemo cum pariatur dolores sapiente incidunt nihil sit enim explicabo recusandae exercitationem culpa reprehenderit tempore, obcaecati facere nobis facilis?",
    },
]

export const sortInfo = {
    brands: ["Company 1", "Company 2", "Company 3",],
    categories: ["Catigori 1", "Catigori 2", "Catigori 3",],
}

export const chunkMaker = (array, chunk) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunk) {
        chunks.push(array.slice(i, i + chunk));
    }
    return chunks
}