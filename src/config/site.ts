export const contact = {
	email: import.meta.env.EMAIL || 'ctbbrasil@ctbbrasil.com.br',
	phone: import.meta.env.PHONE_NUMBER || '(12) 3884-2502',
	mapsUrl: import.meta.env.GOOGLE_MAPS_URL || '#',
}

export const socialUrls = {
	instagram: import.meta.env.INSTAGRAM_URL || '#',
	linkedin: import.meta.env.LINKEDIN_URL || '#',
	facebook: import.meta.env.FACEBOOK_URL || '#',
}

export const nav = [
	{ label: 'Sobre', href: '/sobre' },
	{ label: 'Serviços', href: '/servicos' },
	{ label: 'Obras', href: '/obras' },
	{ label: 'Contato', href: '/contato' },
]
