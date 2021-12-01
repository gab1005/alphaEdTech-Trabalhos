#!/bin/bash

read -p "digite seu peso para calculo" peso
read -p "digite sua altura para calculo" altura

echo $peso
echo $altura


imc=`echo "scale=2; $peso / ($altura * $altura)" | bc`

echo "seu imc é igual a " $imc
