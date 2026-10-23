import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Search from "./Components/Search";

function App() {
    const APIURL = "http://localhost:3500/items";
    
    let title = "My ToDo List";

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(APIURL);
            const data = await response.json();
            setItems(data);
        }
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const [search, setSearch] = useState("");
    const [newItem,setNewItem] = useState("")

    function addItem(newItem){
      const id = items.length ? items[items.length-1].id+1 : 1
      const addNewItem = {id, checked:false,desc:newItem}
      const listitems = [...items,addNewItem]
      setItems(listitems)
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };

    function removeAll(){
        setItems([])
    }
    
    function handleSubmit(e){
      e.preventDefault()
      addItem(newItem)
      setNewItem("")
    }


    return (
        <div className="app">
            <div className="content">
                <Header title={title} />
                <Search
                  search={search}
                  setSearch={setSearch}
                 />
                <Main 
                  items={items.filter(item => item.desc.toLowerCase().includes(search.toLowerCase()))}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                  removeAll={removeAll}
                />
                <Footer
                    handleSubmit={handleSubmit}
                    newItem={newItem}
                    setNewItem={setNewItem}
                    removeAll={removeAll}
                />
            </div>
        </div>
    );
}

export default App;