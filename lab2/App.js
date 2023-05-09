import React, {useState} from 'react';
import Body from 'components/Body/Body';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Bottom from 'components/Bottom/Bottom';

const App = () => {
    const [goods] = useState([
        {
            name: 'Google Pixel 7 PRO',
            price: 50000,
            imgURL: 'https://content.rozetka.com.ua/goods/images/big/292244138.png',
            memory: 256,
            category: 'Smartphone'
        },
        {
            name: 'Google Pixel 4a',
            price: 10500,
            imgURL: 'https://content2.rozetka.com.ua/goods/images/big/279866705.jpg',
            memory: 128,
            category: 'Smartphone'
        },
        {
            name: 'Google Pixel 4',
            price: 9900,
            imgURL: 'https://content1.rozetka.com.ua/goods/images/big/145025433.jpg',
            memory: 64,
            category: 'Smartphone'
        },
        {
            name: "Samsung Galaxy S23",
            price: 40000,
            imgURL:
                [
                    "https://content.rozetka.com.ua/goods/images/big/310594229.jpg",
                ],
            memory: 128,
            category: "Smartphone"
        },
        {
            name: "Apple MacBook Air 13\"",
            price: 44000,
            imgURL: "https://jabko.ua/image/cache/catalog/products/2020/11/111209/5-2-400x400.jpg",
            memory: 256,
            category: "Laptop"
        },
        {
            name: "ASUS TUF Gaming A15",
            price: 36000,
            imgURL: "https://hotline.ua/img/tx/218/2188162095.jpg",
            memory: 512,
            category: "Laptop"
        },
        {
            name: "Apple MacBook Air 13.6\"",
            imgURL: "https://ipodrom.ua/content/images/45/480x480l50nn0/35263720469895.jpg",
            price: 57500,
            memory: 256,
            category: 'Laptop',
        },
        {
            name: "Apple iPad 10.9\"",
            imgURL: "https://content.rozetka.com.ua/goods/images/big/301660400.jpg",
            price: 22000,
            memory: 64,
            category: 'Tablet'
        },
        {
            name: "Apple iPad Air 10.9\"",
            imgURL:
                "https://content2.rozetka.com.ua/goods/images/big/259395025.jpg",
            price: 3000,
            memory: 64,
            category: 'Tablet'
        },
        {
            name: "Apple iPad mini",
            imgURL:
                "https://content2.rozetka.com.ua/goods/images/big/224013718.jpg",
            price: 25000,
            memory: 64,
            category: 'Tablet'
        },
        {
            name: "Apple iPad Pro 11\"",
            imgURL:
                "https://content2.rozetka.com.ua/goods/images/big/301700744.jpg",
            price: 96000,
            memory: 2000,
            category: 'Tablet'
        }
    ]);
    const [cart, setCart] = useState([]);
    const [categories] = useState(["All", ...new Set(goods.map(product => product.category))]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleCategorySelect = category => {
        setSelectedCategory(category);
    }
    const handleLogin = () => {
        setIsAuthenticated(true);
    };
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const handleAddToCart = (product) => {
        let updatedSelectedProducts = [...cart];
        let productIndex = updatedSelectedProducts.findIndex(
            (selectedProduct) => selectedProduct.name === product.name
        );
        if (productIndex === -1) {
            updatedSelectedProducts.push({...product, quantity: 1});
        } else {
            updatedSelectedProducts[productIndex].quantity += 1;
        }
        setCart(updatedSelectedProducts);
    };

    const filteredCars =
        selectedCategory === 'All'
            ? goods
            : goods.filter((product) => product.category === selectedCategory);

    return (
        <div className='container'>
            <Header
                storeName="Mrzv Store"
                isLoggedIn={isAuthenticated}
                onLogin={handleLogin}
                onLogout={handleLogout}/>

            <Menu
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />
            <Body items={filteredCars} addToCart={handleAddToCart}/>
            {}
            <Bottom
                items={cart}
            />
        </div>
    );
};


export default App;