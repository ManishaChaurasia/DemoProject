
import react, { useState } from 'react';
import './ProductComponent.scss';
const ProductComponent = ()=>{
    //define individual  
    // const[name , setName] = useState('');
    // const[description, setDescription] = useState('');
    // const[price, setPrice] = useState('');
    // const[image , setImage] = useState('');
    
    //If we have more input feilds we can show usestate like an object here is an example
    const [formdata ,setFormdata] = useState({});

const productHandler = (e)=>{
    e.preventDefault();
    console.log('Product submitted:', formdata);
}

function updateFormData(event){
    const name = event.target.name;
    const value = event.target.value;
   setFormdata({...formdata, [name]:value });
   localStorage.setItem("formdata", JSON.stringify(formdata));
}


    return <div className="product-form mt-5">
    <h2>Add a New Clothing Product</h2>
    <form onSubmit={productHandler}>
        <label>Name:</label>
        <input type="text" value={formdata.productname} name="productname" onChange={updateFormData} />


        <label>Description</label>
        <input type="text" value={formdata.description} name="description" onChange={updateFormData} />


        <label>Price</label>
        <input type="number" value={formdata.price} name="price" onChange={updateFormData} />


        <label>Image URL</label>
        <input type="url" value={formdata.image} name="image" onChange={updateFormData} />   

        <button className="mt-3" type="submit">Add Product</button>
        
         </form>
    </div>;
};

export default ProductComponent;






