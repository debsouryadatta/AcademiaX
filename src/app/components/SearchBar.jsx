"use client";
import { useState, useRef } from "react";

export default function SearchBar() {
    const form = useRef();

    const [search, setSearch] = useState('');

    const sendRequest = () => {
        // console.log(search);
    }

    return (
        <div>
            <h1 className='flex justify-center mb-5'>Explore Resources</h1>
            <form className="flex justify-center" ref={form} onSubmit={sendRequest}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}