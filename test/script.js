const app = Vue.createApp({
    data() {
        return {
            bloques: [
                {
                    clase: 'goblin',
                    titulo: '¿Te consideras alguien violento?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'goblin',
                    titulo: '¿Consideras que no tienes amigos?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'goblin',
                    titulo: '¿Vas a terapia?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'goblin',
                    titulo: '¿Te consideras obsesivo?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'igor',
                    titulo: '¿Consideras que te enculas rapidin?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'igor',
                    titulo: '¿Aun no superas a tu ex?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'igor',
                    titulo: '¿Eres pasivo agresivo?',
                    respuestas: ['sis', 'non']
                },
                {
                    clase: 'igor',
                    titulo: '¿Te consideras posesivo?',
                    respuestas: ['sis', 'non']
                },
            ],
            respuestas: {},
        };
    },
    methods: {
        contar(bloque, respuesta) {
            this.respuestas[bloque] = respuesta;
        },
        verificarResultado() {
            const goblinRespuestas = this.respuestas.goblin || '';
            const igorRespuestas = this.respuestas.igor || '';

            if (goblinRespuestas.includes('sis') && !igorRespuestas.includes('sis')) {
                alert('¡Eres Goblin!');
            } else if (igorRespuestas.includes('sis') && !goblinRespuestas.includes('sis')) {
                alert('¡Eres Igor!');
            } else {
                alert('¡Resultado sorpresa!');
            }
        },
    },
});

const mountedApp = app.mount('#app');