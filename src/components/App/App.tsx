import type { All, Character } from "@types";
import { useEffect, useState } from "react";
import { getCharacters } from "@api/getCharacters";

export default function App() {
    /** Store all characters entries */
    const [characters, setCharacters] = useState<All<Character>>(
        {} as All<Character>
    );

    useEffect(() => {
        getCharacters().then((characters) => setCharacters(characters));
    }, []);

    console.log(characters);

    return (
        <div>
            <pre>{JSON.stringify(characters.info)}</pre>
        </div>
    );
}
