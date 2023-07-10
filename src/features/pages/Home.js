//import ProductList from "../features/product-list/ProductList";
import ProductList from "../product-list/components/ProductList";
import Navbar from "../navbar/Navbar";

function Home() {
    return ( 
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
     );
}
export default Home
/*import NavBar from "../features/navbar/Navbar";
//import ProductList from "../features/product-list/ProductList";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}
export default Home;*/
