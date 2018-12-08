import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProfessorSchema = new Schema({
    nome: {
        type: String,
        required: 'nome é obrigatório',
        index: { unique: true },
    },
});

export default mongoose.model('Professor', ProfessorSchema);
