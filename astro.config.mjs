import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Quantum Katas',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Español',
                    lang: 'es',
                },
                en: {
                    label: 'English',
                    lang: 'en',
                },
            },
            sidebar: [
                {
                    label: 'Compuertas',
                    items: [
                        {
                            label: 'Pauli-X',
                            slug: 'gates/pauli-x',
                        },
                        {
                            label: 'Pauli-Y',
                            slug: 'gates/pauli-y',
                        },
                        {
                            label: 'Pauli-Z',
                            slug: 'gates/pauli-z',
                        },
                        {
                            label: 'RotX',
                            slug: 'gates/rotx',
                        },
                        {
                            label: 'RotY',
                            slug: 'gates/roty',
                        },
                        {
                            label: 'RotZ',
                            slug: 'gates/rotz',
                        },
                        { label: 'Hadamard', slug: 'gates/hadamard' },
                        {
                            label: 'CNOT',
                            slug: 'gates/cnot',
                        }
                    ],
                    translations: {
                        en: 'Gates',
                    },
                },
                {
                    label: 'Algoritmos',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Deutsch-Jozsa', slug: 'algorithms/deutsch-jozsa' },
                    ],
                    translations: {
                        en: 'Algorithms',
                    },
                },
                {
                    label: 'Pruebas matemáticas',
                    items: [
                        {
                            label: 'Pauli-X',
                            slug: 'proofs/pauli-x',
                        },
                        {
                            label: 'Pauli-Y',
                            slug: 'proofs/pauli-y',
                        },
                        {
                            label: 'Pauli-Z',
                            slug: 'proofs/pauli-z',
                        },
                        { label: 'Hadamard', slug: 'proofs/hadamard' },
                        {
                            label: 'CNOT',
                            slug: 'proofs/cnot',
                        }
                    ],
                    translations: {
                        en: 'Math proofs',
                    },
                },
            ],
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // Katex plugin options
                },
            ],
        ],
    },
    site: 'https://fotscode.github.io',
    base: '/quantum-katas',
})
