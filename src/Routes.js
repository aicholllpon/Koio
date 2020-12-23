import React from 'react';
import MainContextProvider from './contexts/MainContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthContext from './contexts/AuthContext';
import AdminMain from './components/Admin/AdminMain';
import EditProduct from './components/Admin/EditProduct';
import ProductDetails from './components/Products/ProductDetails';
import CartHeader from './components/CartHeader/CartHeader';
import FavoriteHeader from './components/FavoriteHeader/FavoriteHeader';
import CreditCard from './components/CreditCard/CreditCard';

const Routes = () => {
    return (
        <div>
            <MainContextProvider>
                <BrowserRouter>
                    <Switch>
                        <AuthContext>
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/signin" component={SignIn} />
                        </AuthContext>
                    </Switch>
                    <Switch>
                        <Route exact path="/Admin" component={AdminMain} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/edit" component={EditProduct} />
                        <Route exact path="/details/:id" component={ProductDetails} />
                        <Route exact path="/cart" component={CartHeader} />
                        <Route exact path="/favorite" component={FavoriteHeader} />
                         <Route exact path="/payment" component={CreditCard} />
                    </Switch>
                </BrowserRouter>
            </MainContextProvider>
        </div>
    );
};

export default Routes;