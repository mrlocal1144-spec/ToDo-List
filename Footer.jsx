import React from "react";

const Footer = ({handleSubmit,newItem,setNewItem,removeAll}) => {

    return (
        <div className="footer">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="add...."
                    value={newItem}
                    onChange={(e)=> setNewItem(e.target.value)}
                />
                <button>+</button>
            </form>
                <button type="button" onClick={removeAll}>Clear</button>
        </div>
    );
};

export default Footer;