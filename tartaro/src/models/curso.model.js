import mongoose from 'mongoose';

const { Schema } = mongoose;

const CursoSchema = new Schema({
    nome: {
        type: String,
        required: 'curso é obrigatório',
        index: { unique: true },
    },
    inicio: {
        type: String,
        required: 'inicio é obrigatório',
    },
    fim: {
        type: String,
        required: 'fim é obrigatório',
    },
    professores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Professor',
        },
    ],
    salas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Sala',
        },
    ],
});

export default mongoose.model('Curso', CursoSchema);
