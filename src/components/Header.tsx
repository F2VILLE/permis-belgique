"use client";

import Link from "next/link";

export default function Header() {

    return (
        <header className="flex flex-row justify-between items-center p-4 border-b-[1px] border-green-400">
            <h1 className="font-bold text-xl">Header</h1>
            <nav>
                <ul className="flex flex-row space-x-4">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/theory">Théorie</Link>
                    </li>
                    <li>
                        <Link href="/simul-exam">Examen</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}