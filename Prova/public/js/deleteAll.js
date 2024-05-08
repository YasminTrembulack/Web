function deleteAll()
{
    var valor = prompt("Digite 'TENHO CERTEZA' para confirmar:");

    if (valor != 'TENHO CERTEZA')
    {
        return false;
    }
    else{
        return true;
    }
}