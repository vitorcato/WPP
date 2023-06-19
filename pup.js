openai.api_key = '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';

async function resumir_cidade(texto, comprimento_resumo = 50) {
    const prompt = `Redija um texto sobre a cidade: ${cidade} contanto sua historia, população, riqueza e fatos importantes. No máximo de 4 parágrafos, com coerência, ortografia perfeita e ótimo para leitura.\nComprimento: ${comprimento_resumo}\n`;
  const completions = await openai.completions.create({
    engine: 'text-davinci-002',
    prompt,
    max_tokens: comprimento_resumo,
    temperature: 0.5,
  });
  const resumo = completions.choices[0].text.trim();
  return resumo;
}

resumir_cidade("Camaçari")
