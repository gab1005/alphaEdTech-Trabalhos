import Link from 'next/link';

export default function rotas() {
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=01&nome=gabriel" >
                    <li><button>Params</button></li>
                </Link>
            </ul>
        </div>
    );
}