#!/bin/bash
#pegando peso e altura do user

echo "digite seu peso"
read peso

echo "digite sua altura"
read altura

echo "peso=$peso e altura=$altura"

echo "imc = $(($peso / ($altura*$altura)))"
