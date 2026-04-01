const number = import.meta.env.WHATSAPP_NUMBER || '1238842502'
const text = import.meta.env.WHATSAPP_TEXT || 'Olá! Gostaria de saber mais sobre os serviços da CTB Brasil'

export const whatsappUrl = `https://wa.me/55${number}?text=${encodeURIComponent(text)}`
