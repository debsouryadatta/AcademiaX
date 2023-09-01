"use client";
import { useRouter } from "next/navigation"

export default function Header({ username, mode }) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/logout');
    };

    return (
        <div>
            <div className="flex justify-center my-5">
                <h1 className="mx-40">Academiax</h1>
                <h1 className="mx-40">Marketplace</h1>
                <div className="flex mx-40">
                    <h1 className="mr-5">username</h1>
                    <h1 className="mr-5">mode</h1>
                    <button onClick={handleClick}>logout</button>
                </div>
            </div>
            <h1 className="text-over-image mt-28 mb-40">This is the Academiax Marketplace</h1>
        </div>
    )
}