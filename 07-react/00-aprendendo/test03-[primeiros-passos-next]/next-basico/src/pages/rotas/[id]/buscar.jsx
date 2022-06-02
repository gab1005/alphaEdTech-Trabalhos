import { useRouter } from 'next/router';

export default function buscar(){
    const router = useRouter();

    // para pegar o valor especifico passado na url.
    const id = router.query.id;

    console.log(router);
    console.log(id);

    return(
        <div>
            <h1>Rotas / Id / Buscar!!!</h1>
        </div>
    );
}

// notas:
// colocando o nome da pastar ou arquivo id em volta de colchetes, agora ela
// recebe valores dinamicos durante o acesso da url, ou seja
// pode-se passar um noumero aleatorio em vez de o nome id.

// pode-se ser qualquer nome  'inicial' seja codigo, id, palavra-qualquer
// ele recebe nome ou numero qualquer