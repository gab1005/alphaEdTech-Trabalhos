#!/bin/bash

echo digite seu peso
read peso

echo digite sua altura
read altura

echo imc = $( $peso / $(( ($altura * $altura)/100 )) )
