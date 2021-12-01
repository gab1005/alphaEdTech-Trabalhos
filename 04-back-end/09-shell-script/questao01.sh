#!/bin/bash                                                                     

read -p "digite seu peso para calculo = " peso
read -p "digite sua altura para calculo = " altura
echo $peso
echo $altura

imc=`echo "scale=2; $peso / ($altura * $altura)" | bc`
echo "imc =  " $imc

if (( ` bc <<< "$imc < 18.5" `  ));
then
echo "imc = $imc, magreza"
elif (( `bc <<< " $imc >= 18.5 && $imc < 25 "` ));
then
echo "imc = $imc, saudavel"
elif (( ` bc <<< " $imc >=25 && $imc < 30 " ` ));
then
echo "imc = $imc, sobrepeso"
elif (( ` bc <<< " $imc >= 30 && $imc < 35 " ` ));
then
echo "imc = $imc, obesidade grau 1"
elif (( ` bc <<< " $imc >= 35 && $imc < 40 " ` ));
then
echo "imc = $imc, obesidade 2"
elif (( ` bc <<< " $imc >= 40 " ` ));
then
echo "imc = $imc, obesidade grau 3"
fi

