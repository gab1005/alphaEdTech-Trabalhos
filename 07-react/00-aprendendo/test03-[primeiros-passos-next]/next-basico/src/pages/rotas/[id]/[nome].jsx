import { useRouter } from 'next/router';

export default function codigoNome(){
    const router = useRouter();
    const codigo = router.query.id;
    const nome = router.query.nome;
    
    return(
        <div>
            <h1>rotas / {codigo} / {nome} </h1>
        </div>
    );
}