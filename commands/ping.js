import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 GOLDEN-MD-V1 Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `The GoldenBoy`
        )
    }, { quoted: message })
}