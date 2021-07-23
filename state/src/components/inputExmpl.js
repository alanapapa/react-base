import { useState } from "react";

function InputExmpl() {
    const [form, setForm] = useState({ name: "", surname: "" });

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        console.log(e.target.name);
    };

    return (
        <div>
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            {form.name}
            <br />
            <hr />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            {form.surname}
        </div>
    );
}

export default InputExmpl;
