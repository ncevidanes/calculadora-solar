const calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', () => {
    // Obter valores dos inputs
    const consumo = parseFloat(document.getElementById('consumo').value);
    const tarifa = parseFloat(document.getElementById('tarifa').value);
    const custoSistema = parseFloat(document.getElementById('custo_sistema').value);
    const geracaoMedia = parseFloat(document.getElementById('geracao_media').value);

    // Validar entradas (exemplo simples)
    if (isNaN(consumo) || isNaN(tarifa) || isNaN(custoSistema) || isNaN(geracaoMedia) || geracaoMedia <= 0 || custoSistema <= 0 || tarifa <= 0) {
        alert("Por favor, insira valores numéricos válidos e positivos.");
        return;
    }

    // Calcular economia (simplificado - considere a tarifa mínima, taxas, etc., para mais precisão)
    // Assume que a geração atende ou supera o consumo para simplificar
    const kwhEconomizados = Math.min(consumo, geracaoMedia);
    const economiaMensal = kwhEconomizados * tarifa;

    // Calcular payback simples (anos)
    const economiaAnual = economiaMensal * 12;
    const paybackAnos = custoSistema / economiaAnual;

    // Exibir resultados
    document.getElementById('resultado_economia').textContent = economiaMensal.toFixed(2);
    document.getElementById('resultado_payback').textContent = paybackAnos.toFixed(1);
});
