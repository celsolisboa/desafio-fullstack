import mongoose from 'mongoose';

const { Schema } = mongoose;

const SalaSchema = new Schema({
    nome: {
        type: String,
        required: 'nome é obrigatório',
        index: { unique: true },
    },
});

export default mongoose.model('Sala', SalaSchema);
