import { useRouter } from 'next/router';
import Link from 'next/link';

export default function params(){
    // para acessar valores de entrada por "?", basta acessar o nome da varivael

    const router = useRouter();
    const nome = router.query.nome;
    const id = router.query.id;

    console.log(router);

    return(
        <div>
            <h1>Rotas Parans: {nome} {id}</h1>

            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    );
}