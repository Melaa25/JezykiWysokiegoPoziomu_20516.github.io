import React, {useState } from "react";

function Contact() {
    const [form, setForm] = useState({name: "", message: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wiadomość od ${form.name}: ${form.message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Imię:
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value})}
                    />
            </label>
            <label>
                Wiadomość:
                <textarea   
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value})}
                    />
            </label>
            <button type= "submit"> Wyślij</button>
        </form>
    );
}
export default Contact;