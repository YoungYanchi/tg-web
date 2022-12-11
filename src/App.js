import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./component/hooks/useTelegram";
import Header from "./component/Header/Header";
import Form from './component/Form/Form'
import {Route, Routes} from 'react-router-dom'
import ProductList from "./component/ProductList/ProductList";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
