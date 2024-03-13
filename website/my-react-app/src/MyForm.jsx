import { useState } from "react";

function MyForm() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} type="number" min="0" onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

            <textarea placeholder="Enter delivery instructions" value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio"
                       value="Pick Up"
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}
                ></input>
                Pick Up
            </label><br></br>

            <label>
                <input type="radio"
                       value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange}
                ></input>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>);
}

export default MyForm;