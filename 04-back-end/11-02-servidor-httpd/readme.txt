//os ip's para acessar no navegador são
127.0.0.1 (na porta 80) e 10.0.0.4 (na porta 80 e porta 8080)

//por padrão vai funcionar o 127.0.0.1, mas o 10.0.0.4 precisa que o "apachectl" seja iniciado, no caso, va para o diretorio:
cd /usr/local/apche2/bin

//la tera um arquivo chamado "apachectl", execute o comando:
sudo ./apachectl -k start

//ele vai iniciar o "apachectl", agora basta recarregar a pagina que acessa o ip 10.0.0.4, ou apenas acessar esse ip que deve funcionar; tanto para porta 80 como para porta 8080

###############
//caminhos interessante de se verificar são
cd /usr/local/apache2/conf
vi httpd.conf
//configura as portas de entrada do 10.0.0.4 (estando configuradas, apos edição, para 80 e 8080)
//e
cd /usr/local/apache2/htdocs
vi index.html
//tem a mensagem que aparece em 10.0.0.4
