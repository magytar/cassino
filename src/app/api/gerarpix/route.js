export async function POST(req) {
  try {
    const body = await req.json() // pega o amount enviado do frontend

    const url = "https://api.boltpagamentos.com.br/api/v1/gateway/pix/receive"
    const headers = {
      "Content-Type": "application/json",
      "x-public-key": "amandaoliveira2025amanda_1756696279052",
      "x-secret-key": "d99a9f09-c420-4ae2-a457-34c4633a0d75",
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        identifier: "pedido_" + Date.now(),
        amount: body.amount || 1200,
        client: {
          name: "João Silva",
          email: "joao@email.com",
          document: "07077458962",
        },
      }),
    })

    // tenta pegar o JSON
    const data = await response.json()
    console.log("data", data)

    // Retorna somente o que você precisa
    return new Response(JSON.stringify({ image: data.pix.image, code: data.pix.code }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Erro na API:", err)
    return new Response(JSON.stringify({ error: "Não foi possível gerar PIX" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
