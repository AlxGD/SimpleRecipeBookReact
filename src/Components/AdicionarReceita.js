import React, { useState } from 'react';

function AdicionarReceita() {
    const [showForm, setShowForm] = useState(false);

    const handleAdicionarReceita = () => {
        setShowForm(true);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {showForm ? (
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Título da Receita</label>
                            <input type="text" className="form-control" id="title" placeholder="Nome da receota" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Descrição</label>
                            <textarea className="form-control" id="description" placeholder="Descrição da Receita" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <textarea className="form-control" id="ingredients" placeholder="Ingredientes" />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                ) : (
                    <>
                        <h3 className="card-title">Adicionar Receita</h3>
                        <p className="card-text">Clique para adicionar a receita.</p>
                        <button onClick={handleAdicionarReceita} className="btn btn-primary">Adicionar Receita</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default AdicionarReceita;
