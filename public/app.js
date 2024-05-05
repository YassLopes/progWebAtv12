async function consultarCNPJ() {
    let cnpj = document.getElementById('cnpj').value;
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    const url = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Falha na consulta do CNPJ');
        }
        const data = await response.json();
        let info = `
            Nome Fantasia: ${data["NOME FANTASIA"]}<br>
            Razão Social: ${data["RAZAO SOCIAL"]}<br>
            CNPJ: ${data.CNPJ}<br>
            Status: ${data.STATUS}<br>
            CNAE Principal Descrição: ${data["CNAE PRINCIPAL DESCRICAO"]}<br>
            CNAE Principal Código: ${data["CNAE PRINCIPAL CODIGO"]}<br>
            CEP: ${data.CEP}<br>
            Data de Abertura: ${data["DATA ABERTURA"]}<br>
            DDD: ${data.DDD}<br>
            Telefone: ${data.TELEFONE}<br>
            Email: ${data.EMAIL}<br>
            Tipo de Logradouro: ${data["TIPO LOGRADOURO"]}<br>
            Logradouro: ${data.LOGRADOURO}<br>
            Número: ${data.NUMERO}<br>
            Complemento: ${data.COMPLEMENTO}<br>
            Bairro: ${data.BAIRRO}<br>
            Município: ${data.MUNICIPIO}<br>
            UF: ${data.UF}
        `;
        document.getElementById('resultadoCNPJ').innerHTML = info;
    } catch (error) {
        console.error('Erro ao consultar CNPJ:', error);
        document.getElementById('resultadoCNPJ').innerText = 'Erro ao consultar CNPJ. Tente novamente.';
    }
}
